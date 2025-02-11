import { Fragment, useEffect } from 'react';
import Editable from '@/components/editable';
import { useParams } from 'react-router-dom';
import useApi from '@/hooks/custom/useApi.ts';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';

const EditNote = () => {
	const { id } = useParams();
	const {note: apiNote} = useApi();
	const correspondingNote = useAsyncMemo(() => apiNote.get(Number(id)), [id], null);

	useEffect( () => {
		console.log(correspondingNote);
	}, [correspondingNote] );

	return correspondingNote ? (
		<Fragment>
			<h1>{correspondingNote.title}</h1>
			<Editable note={correspondingNote} />
		</Fragment>
	) : null
};

export default EditNote;
