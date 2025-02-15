import useApi from '@/hooks/custom/useApi.ts';

const Login = () => {
	const {
		auth,
	} = useApi();
	return (
		<section style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '5rem',
			height: '100vh'
		}}>
			<h1>Login</h1>
			<form style={{
				display: 'flex',
				flexDirection: 'column',
				width: '30%',
				gap: '0.5rem'
			}} onSubmit={async (e) => {
				e.preventDefault();
				const data = new FormData(e.target as HTMLFormElement);
				await auth.login({
					email: data.get('email') as string,
					password: data.get('password') as string,
				}).then(() => {
					window.location.href = '/dashboard';
				})
			}}>
				<label style={{
					display: 'flex',
					flexDirection: 'column'
				}}>
					<span>Email</span>
					<input type="email" name="email" />
				</label>
				<label style={ {
					display: 'flex',
					flexDirection: 'column',
				} }>
					<span>Password</span>
					<input type="password" name="password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</section> );
};

export default Login;
