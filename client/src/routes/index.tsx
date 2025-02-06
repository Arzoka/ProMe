import WebsiteRoutes from './WebsiteRoutes';
import DashboardRoutes from './DashboardRoutes';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter( [{
	path: '/dashboard',
	element: (
		<Outlet /> ),
	children: [...DashboardRoutes, {
		path: '*',
		element:
			<p>Dashboard page not found error</p>,
	}],
}, {
	element:
		<Outlet />,
	children: [...WebsiteRoutes, {
		path: '*',
		element:
			<p>Website page not found error</p>,
	}],
}] );

export default router;
