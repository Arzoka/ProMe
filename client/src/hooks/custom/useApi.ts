import Api from '@/globals/classes/Api.ts';
import { useCallback, useState } from 'react';
import { AuthobjectType, CreateAuthobjectType, CreateLilguyType, CreateTestobjectType, CreateUserType, LilguyType, LoginUserType, TestobjectType, UserType } from '@/types/api';
import { CreateNoteType, NoteType } from '@/types/api/NoteType.ts';

const useApi = () => {
	const apiInstance = new Api( import.meta.env.VITE_API_URL );

	const [loading, setLoading] = useState( false );
	const [error, setError] = useState<null | string>( null );

	// Generic handler for API calls
	const handleRequest = useCallback( async ( apiCall: () => Promise<any>, errorMessage: string ) => {
		setLoading( true );
		setError( null );
		try {
			return await apiCall();
		} catch ( err ) {
			setError( errorMessage );
			throw err;
		} finally {
			setLoading( false );
		}
	}, [] );

	// Testobject
	const fetchTestobjects = useCallback( (): Promise<TestobjectType[]> => handleRequest( () => apiInstance.testobject.getAll(), 'Failed to fetch testobjects' ), [apiInstance, handleRequest] );
	const fetchTestobject = useCallback( ( id: number ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.get( id ), 'Failed to fetch testobject' ), [apiInstance, handleRequest] );
	const createTestobject = useCallback( ( body: CreateTestobjectType ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.create( body ), 'Failed to create testobject' ), [apiInstance, handleRequest] );
	const updateTestobject = useCallback( ( id: number, body: CreateTestobjectType ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.update( id, body ), 'Failed to update testobject' ), [apiInstance, handleRequest] );
	const deleteTestobject = useCallback( ( id: number ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.delete( id ), 'Failed to delete testobject' ), [apiInstance, handleRequest] );

	// Authobject
	const fetchAuthobjects = useCallback( (): Promise<AuthobjectType[]> => handleRequest( () => apiInstance.authobject.getAll(), 'Failed to fetch authobjects' ), [apiInstance, handleRequest] );
	const fetchAuthobject = useCallback( ( id: number ): Promise<AuthobjectType> => handleRequest( () => apiInstance.authobject.get( id ), 'Failed to fetch authobject' ), [apiInstance, handleRequest] );
	const createAuthobject = useCallback( ( body: CreateAuthobjectType ): Promise<AuthobjectType> => handleRequest( () => apiInstance.authobject.create( body ), 'Failed to create authobject' ), [apiInstance, handleRequest] );
	const updateAuthobject = useCallback( ( id: number, body: CreateAuthobjectType ): Promise<AuthobjectType> => handleRequest( () => apiInstance.authobject.update( id, body ), 'Failed to update authobject' ), [apiInstance, handleRequest] );
	const deleteAuthobject = useCallback( ( id: number ): Promise<AuthobjectType> => handleRequest( () => apiInstance.authobject.delete( id ), 'Failed to delete authobject' ), [apiInstance, handleRequest] );

	// Lilguy
	const fetchLilguys = useCallback( (): Promise<LilguyType[]> => handleRequest( () => apiInstance.lilguy.getAll(), 'Failed to fetch lilguys' ), [apiInstance, handleRequest] );
	const fetchLilguy = useCallback( ( id: number ): Promise<LilguyType> => handleRequest( () => apiInstance.lilguy.get( id ), 'Failed to fetch lilguy' ), [apiInstance, handleRequest] );
	const createLilguy = useCallback( ( body: CreateLilguyType ): Promise<LilguyType> => handleRequest( () => apiInstance.lilguy.create( body ), 'Failed to create lilguy' ), [apiInstance, handleRequest] );
	const updateLilguy = useCallback( ( id: number, body: CreateLilguyType ): Promise<LilguyType> => handleRequest( () => apiInstance.lilguy.update( id, body ), 'Failed to update lilguy' ), [apiInstance, handleRequest] );
	const deleteLilguy = useCallback( ( id: number ): Promise<LilguyType> => handleRequest( () => apiInstance.lilguy.delete( id ), 'Failed to delete lilguy' ), [apiInstance, handleRequest] );

	// Note
	const fetchNotes = useCallback( (): Promise<NoteType[]> => handleRequest( () => apiInstance.note.getAll(), 'Failed to fetch notes' ), [apiInstance, handleRequest] );
	const fetchNote = useCallback( ( id: number ): Promise<NoteType> => handleRequest( () => apiInstance.note.get( id ), 'Failed to fetch note' ), [apiInstance, handleRequest] );
	const createNote = useCallback( ( body: CreateNoteType ): Promise<NoteType> => handleRequest( () => apiInstance.note.create( body ), 'Failed to create note' ), [apiInstance, handleRequest] );
	const updateNote = useCallback( ( id: number, body: CreateNoteType ): Promise<NoteType> => handleRequest( () => apiInstance.note.update( id, body ), 'Failed to update note' ), [apiInstance, handleRequest] );
	const deleteNote = useCallback( ( id: number ): Promise<NoteType> => handleRequest( () => apiInstance.note.delete( id ), 'Failed to delete note' ), [apiInstance, handleRequest] );

	// Auth
	const register = useCallback( ( body: CreateUserType ): Promise<UserType> => handleRequest( () => apiInstance.auth.register( body ), 'Failed to register' ), [apiInstance, handleRequest] );
	const login = useCallback( ( body: LoginUserType ): Promise<UserType> => handleRequest( () => apiInstance.auth.login( body ), 'Failed to login' ), [apiInstance, handleRequest] );
	const logout = useCallback( (): Promise<UserType> => handleRequest( () => apiInstance.auth.logout(), 'Failed to logout' ), [apiInstance, handleRequest] );

	return {
		loading,
		error,
		testobject: {
			getAll: fetchTestobjects,
			get: fetchTestobject,
			create: createTestobject,
			update: updateTestobject,
			delete: deleteTestobject,
		},
		authobject: {
			getAll: fetchAuthobjects,
			get: fetchAuthobject,
			create: createAuthobject,
			update: updateAuthobject,
			delete: deleteAuthobject,
		},
		lilguy: {
			getAll: fetchLilguys,
			get: fetchLilguy,
			create: createLilguy,
			update: updateLilguy,
			delete: deleteLilguy,
		},
		note: {
			getAll: fetchNotes,
			get: fetchNote,
			create: createNote,
			update: updateNote,
			delete: deleteNote,
		},
		auth: {
			register,
			login,
			logout,
		},
	};
};

export default useApi;
