import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import ParseReceivedTextData from '@/components/editable/ParseReceivedTextData.ts';
import { ParsedFile, ParsedText } from '@/types/app/Editable.ts';

const useEditable: ( ReceivedTextData: string ) => {
	textAreaRefs: MutableRefObject<( HTMLTextAreaElement | null )[]>;
	parsedText: ( ParsedText | ParsedFile )[];
	adjustHeight: ( textarea: ( HTMLTextAreaElement | null ) ) => void
} = ( ReceivedTextData ) => {
	const parsedText: ( ParsedText | ParsedFile )[] = useMemo( () => ParseReceivedTextData( ReceivedTextData ), [] );

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
	}, [parsedText] );

	return {
		parsedText,
		textAreaRefs,
		adjustHeight,
	};
};

export default useEditable;
