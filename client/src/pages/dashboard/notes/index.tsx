import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Notes = () => {
	return (
		<Fragment>
			<p>Notes</p>

			<ul className={styles.NoteList}>
				{Array.from({ length: 10 }).map((_, index) => (
					<Link className={styles.NotePreview} to={`/dashboard/notes/edit`}>
						<strong>Note Title {index}</strong>
						<small>09/02/2025 23:26</small>
					</Link>
				))}
			</ul>
		</Fragment>
	);
};

export default Notes;
