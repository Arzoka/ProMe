type ParsedText = {
	isFile: boolean;
	content: string;
};

type ParsedFile = {
	isFile: boolean;
	isImage: boolean;
	id: number;
	name: string;
	fileType: string;
};

export type { ParsedText, ParsedFile };
