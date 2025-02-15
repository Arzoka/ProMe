import { Constants } from '@/types/api/Constants.ts';
import { UserType } from '@/types/api/UserType.ts';

type CreateLilguyType = {
	name: string;
	image: string;
	price: number;
	description: string;
}

type LilguyType = CreateLilguyType & Constants;

type FetchedLilguyType = LilguyType & {creator: UserType}

export type {
	CreateLilguyType,
	LilguyType,
	FetchedLilguyType
}
