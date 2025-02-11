import { AttachmentType } from '@/types/api/AttachmentType.ts';

type CreateSegmentType = {
	note_id: string;
	index: number;
	content: string;
	is_file: boolean;
}

type SegmentType = CreateSegmentType & {content: string | AttachmentType};

export type {
	CreateSegmentType,
	SegmentType
}
