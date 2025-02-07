import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
	return (
		<Fragment>
			<h1>Index</h1>
			<Link to={'/api-test'}>Go to /api-test</Link><br />
			<Link to={'/register'}>Go to /register</Link><br />
			<Link to={'/login'}>Go to /login</Link><br />
		</Fragment>
	)
};

export default Root;
