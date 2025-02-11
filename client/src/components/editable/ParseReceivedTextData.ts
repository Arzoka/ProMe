type ParsedText = {
	isFile: boolean,
	content: string,
}

type ParsedFile = {
	isFile: boolean,
	isImage: boolean,
	id: number,
	name: string,
	fileType: string,
}

export default function ParseReceivedTextData( text: string | (ParsedText | ParsedFile)[], noParse:boolean=false ) {
	if ( typeof text !== 'string' ) {
		if ( noParse ) {
			return text;
		}
		console.error( 'ParseReceivedTextData: Received data is not a string' );
		return text;
	}

	const parsedArray: ( ParsedFile | ParsedText )[] = [];

	text.split( /(\[START-FILE-REFERENCE\].*?\[END-FILE-REFERENCE\])/gs ).forEach( ( segment ) => {
		const match = segment.match( /\[START-FILE-REFERENCE\](.*?)\[END-FILE-REFERENCE\]/s );

		if ( !match ) {
			( segment.trim() );
			{
				parsedArray.push( {
					isFile: false,
					content: segment.trim(),
				} );
			}
			return;
		}

		const result = match[1].split( ', ' ).map( obj => {
			const [key, value] = obj.split( ':' );
			return { [key]: value };
		} );

		const fileObject = Object.assign( {}, ...result ) as {
			ID: number,
			NAME: string,
			FILETYPE: string
		};

		parsedArray.push( {
			isFile: true,
			isImage: ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes( fileObject.FILETYPE ),
			id: fileObject.ID,
			name: fileObject.NAME,
			fileType: fileObject.FILETYPE,
		} );
	} );

	return parsedArray;
}
