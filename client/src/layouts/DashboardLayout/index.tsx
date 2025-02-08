import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import Sidebar from '@/layouts/DashboardLayout/sub-components/Sidebar';
import { FC } from 'react';
import SidebarItemType from '@/types/app/SidebarItemType.ts';

const DashboardLayout: FC<{
	SidebarItems: SidebarItemType[]
}> = ( { SidebarItems } ) => {
	return (
		<section className={ styles.DashboardLayout }>
			<Sidebar SidebarItems={ SidebarItems } />
			<main>
				<Outlet />
			</main>
		</section> );
};

export default DashboardLayout;
