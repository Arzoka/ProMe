import Create from '@/pages/dashboard/lilguys/create';
import Marketplace from '@/pages/dashboard/lilguys';

const DashboardRoutes = [{
	path: '/dashboard/lilguys',
	element:
		<Marketplace />,
}, {
	path: '/dashboard/lilguys/create',
	element:
		<Create />,
}];

export default DashboardRoutes;
