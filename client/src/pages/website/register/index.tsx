import { Fragment } from 'react';
import useApi from '@/hooks/custom/useApi.ts';

const Register = () => {
	const {
		auth,
	} = useApi();
	return (
		<Fragment>
			<h1>Register</h1>
			<form onSubmit={async (e) => {
				e.preventDefault();
				const data = new FormData(e.target as HTMLFormElement);
				await auth.register({
					name: data.get('name') as string,
					email: data.get('email') as string,
					password: data.get('password') as string,
				});
			}}>
				<label>
					<span>Name</span>
					<input type="text" name="name" />
				</label>
				<label>
					<span>Email</span>
					<input type="email" name="email" />
				</label>
				<label>
					<span>Password</span>
					<input type="password" name="password" />
				</label>
				<button type="submit">Register</button>
			</form>
		</Fragment> );
};

export default Register;
