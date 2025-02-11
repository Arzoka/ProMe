import styles from './index.module.scss';
import useEditable from '@/hooks/custom/useEditable.ts';
import { FC } from 'react';
import { NoteType } from '@/types/api/NoteType.ts';
import { AttachmentType } from '@/types/api/AttachmentType.ts';

const Editable: FC<{
	note: NoteType
}> = ( { note } ) => {
	const {
		textAreaRefs,
		adjustHeight,
	} = useEditable( note );

	return note === null ? null : (
		<section className={ styles.EditableWrapper }>
			{ note.segments.map( ( item, index ) => item.is_file ? (
				<button className={styles.FilePreview} key={index}>
					{(item.content as AttachmentType).file.file_name}
				</button> ) : (
				<textarea
					ref={ ( el ) => ( textAreaRefs.current[index] = el ) }
					onChange={ ( e ) => adjustHeight( e.target ) }
					key={ index }
					defaultValue={ item.content }
				/> ) ) }
		</section> );
};

export default Editable;
