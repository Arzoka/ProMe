import { Constants } from '@/types/api/Constants.ts';
import { FileType } from '@/types/api/FileType.ts';

type CreateAttachmentType = {
	note_id: number;
	file_id: number;
}

type AttachmentType =  CreateAttachmentType & Constants & {file: FileType};

export type {
	CreateAttachmentType,
	AttachmentType
}
