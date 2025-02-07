import Root from '@/pages/website/root';
import ApiTest from '@/pages/website/api-test';
import Register from '@/pages/website/register';
import Login from '@/pages/website/login';

const WebsiteRoutes = ( [{
	path: '/',
	element:
		<Root />,
}, {
	path: '/api-test',
	element:
		<ApiTest />,
}, {
	path: '/register',
	element:
		<Register />,
}, {
	path: '/login',
	element:
		<Login />,
}] );

export default WebsiteRoutes;
