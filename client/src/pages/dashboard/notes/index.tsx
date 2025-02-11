import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import useApi from '@/hooks/custom/useApi.ts';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';

const Notes = () => {
	const {note: apiNote} = useApi();

	const notes = useAsyncMemo(() => apiNote.getAll(), [], []);

	return (
		<Fragment>
			<p>Notes</p>

			<ul className={styles.NoteList}>
				{notes.map((note, index) => (
					<Link key={index} className={styles.NotePreview} to={`/dashboard/notes/edit/${note.id}`}>
						<strong>{note.title}</strong>
						<small>{Intl.DateTimeFormat('nl-NL', {dateStyle: 'short', timeStyle: 'short'}).format(new Date(note.updated_at))
						}</small>
					</Link>
				))}
			</ul>
		</Fragment>
	);
};

export default Notes;
