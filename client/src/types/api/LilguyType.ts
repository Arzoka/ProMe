import { Constants } from '@/types/api/Constants.ts';

type CreateLilguyType = {
	name: string;
	image: string;
	price: number;
}

type LilguyType = CreateLilguyType & Constants;

export type {
	CreateLilguyType,
	LilguyType
}
