import { Constants } from '@/types/api/Constants.ts';

type CreateUserType = {
	name: string;
	password: string;
	email: string;
}

type LoginUserType = {
	email: string;
	password: string;
}

type UserType = {name: string; email: string;} & Constants;

export type {
	CreateUserType,
	LoginUserType,
	UserType
}
