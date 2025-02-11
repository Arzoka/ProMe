import { MutableRefObject, useEffect, useRef } from 'react';
import { NoteType } from '@/types/api/NoteType.ts';

const useEditable: ( ( note: NoteType ) => {
	textAreaRefs: MutableRefObject<( HTMLTextAreaElement | null )[]>;
	adjustHeight: ( textarea: ( HTMLTextAreaElement | null ) ) => void
} ) = ( note ) => {
	// const parsedText: ( ParsedText | ParsedFile )[] = useMemo( () => ParseReceivedTextData( ReceivedTextData, noParse ), [ReceivedTextData] );

	const textAreaRefs = useRef<( HTMLTextAreaElement | null )[]>( [] );

	const adjustHeight = ( textarea: HTMLTextAreaElement | null ) => {
		if ( !textarea ) { return; }

		const prevScrollPos = window.scrollY;

		textarea.style.height = 'auto';
		textarea.style.height = `${ textarea.scrollHeight }px`;

		window.scrollTo( 0, prevScrollPos );
	};

	useEffect( () => {
		textAreaRefs.current.forEach( adjustHeight );
	}, [note] );

	return {
		// parsedText,
		textAreaRefs,
		adjustHeight,
	};
};

export default useEditable;
