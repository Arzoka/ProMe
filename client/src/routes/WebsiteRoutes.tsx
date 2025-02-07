import Root from '@/pages/website/root';
import ApiTest from '@/pages/website/api-test';

const WebsiteRoutes = ( [{
	path: '/',
	element:
		<Root />,
}, {
	path: '/api-test',
	element:
		<ApiTest />,
}] );

export default WebsiteRoutes;
