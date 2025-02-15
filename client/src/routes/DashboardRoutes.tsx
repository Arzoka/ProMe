import { Create, Marketplace, Notes, Root } from '@/pages/dashboard';
import EditNote from '@/pages/dashboard/notes/edit';
import SpecificLilGuy from '@/pages/dashboard/lilguys/:id';


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
},{
	path: '/dashboard/notes/edit',
	element:
		<EditNote />,
},{
	path: '/dashboard/notes/edit/:id',
	element:
		<EditNote />,
}, {
	path: '/dashboard/lilguys',
	displayName: 'Marketplace',
	element:
		<Marketplace />,
}, {
	path: '/dashboard/lilguys/create',
	element:
		<Create />,
},{
	path: '/dashboard/lilguys/:id',
	element:
		<SpecificLilGuy />,
}];

export default DashboardRoutes;
