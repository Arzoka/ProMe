import Create from '@/pages/dashboard/lilguys/create';
import Marketplace from '@/pages/dashboard/lilguys';
import Dashboard from '@/pages/dashboard';

const DashboardRoutes = [{
	path: '/dashboard',
	displayName: 'Dashboard',
	element:
		<Dashboard />,
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
