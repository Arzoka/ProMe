import { Fragment } from 'react';
import useApi from '@/hooks/custom/useApi.ts';

const Login = () => {
	const {
		auth,
	} = useApi();
	return (
		<Fragment>
			<h1>Login</h1>
			<form onSubmit={async (e) => {
				e.preventDefault();
				const data = new FormData(e.target as HTMLFormElement);
				await auth.login({
					email: data.get('email') as string,
					password: data.get('password') as string,
				}).then((res: any) => {
					if (res.status !== 200) { return }

					window.location.href = '/dashboard';
				})
			}}>
				<label>
					<span>Email</span>
					<input type="email" name="email" />
				</label>
				<label>
					<span>Password</span>
					<input type="password" name="password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</Fragment> );
};

export default Login;
