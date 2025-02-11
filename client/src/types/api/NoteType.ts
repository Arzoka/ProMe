import { Constants } from '@/types/api/Constants.ts';
import { SegmentType } from '@/types/api/SegmentType.ts';

type CreateNoteType = {
	title: string;
}

type NoteType = CreateNoteType & Constants & {segments: SegmentType[] };

export type {
	CreateNoteType,
	NoteType
}
