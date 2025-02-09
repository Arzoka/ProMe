import styles from './index.module.scss';
import useEditable from '@/hooks/custom/useEditable.ts';
import MockReceivedText from '@/components/editable/mock-received-text.ts';
import { ParsedFile, ParsedText } from '@/types/app/Editable.ts';

const Editable = () => {
	const {
		parsedText,
		textAreaRefs,
		adjustHeight,
	} = useEditable( MockReceivedText );

	return (
		<section className={ styles.EditableWrapper }>
			{ parsedText.map( ( item, index ) => item.isFile ? (
				<button className={ styles.FilePreview } key={ index }>
					{ ( item as ParsedFile ).name }
				</button> ) : (
				<textarea
					ref={ ( el ) => ( textAreaRefs.current[index] = el ) }
					onChange={ ( e ) => adjustHeight( e.target ) }
					key={ index }
					defaultValue={ ( item as ParsedText ).content }
				/> ) ) }
		</section> );
};

export default Editable;
