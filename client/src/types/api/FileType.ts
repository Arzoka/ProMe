import { Constants } from '@/types/api/Constants.ts';

type CreateFileType = {
	file_name: string;
}

type FileType = CreateFileType & Constants & {
	file_path: string;
	file_extension: string;
};

export type {
	CreateFileType,
	FileType
}
