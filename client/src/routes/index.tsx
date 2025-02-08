import WebsiteRoutes from './WebsiteRoutes';
import DashboardRoutes from './DashboardRoutes';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import SidebarItemType from '@/types/app/SidebarItemType.ts';

const router = createBrowserRouter( [{
	path: '/dashboard',
	element: (
		<DashboardLayout
			SidebarItems={ DashboardRoutes
				.map( ( {
					path,
					displayName,
				} ) => displayName ? {
					path,
					displayName,
				} : undefined )
				.filter( Boolean ) as SidebarItemType[] }
		/> ),
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
