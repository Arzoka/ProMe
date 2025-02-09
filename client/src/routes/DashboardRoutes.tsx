import { Create, Marketplace, Notes, Root } from '@/pages/dashboard';


const DashboardRoutes = [{
	path: '/dashboard',
	displayName: 'Dashboard',
	element:
		<Root />,
},{
	path: '/dashboard/notes',
	displayName: 'Notes',
	element:
		<Notes />,
}, {
	path: '/dashboard/lilguys',
	displayName: 'Marketplace',
	element:
		<Marketplace />,
}, {
	path: '/dashboard/lilguys/create',
	element:
		<Create />,
}];

export default DashboardRoutes;
