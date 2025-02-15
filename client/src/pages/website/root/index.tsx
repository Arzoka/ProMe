import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
	return (
		<Fragment>
			<h1>Index</h1>
			<Link to={'/login'}>Go to /login</Link><br />
			<Link to={'/register'}>Go to /register</Link>
		</Fragment>
	)
};

export default Root;
