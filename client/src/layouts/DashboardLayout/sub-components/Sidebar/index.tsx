import styles from './index.module.scss';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SidebarItemType from '@/types/app/SidebarItemType.ts';

const Sidebar: FC<{SidebarItems: SidebarItemType[]}> = ({SidebarItems}) => {

	useEffect( () => {
		if (!SidebarItems) {
			throw new Error('SidebarItems is required');
		}
	}, [] );

	return (
		<aside className={styles.Sidebar}>
			<header>
				<img alt={"logo"} src={"https://mlockx.cloud/taiga/8.webp"} />
			</header>
			<main>
				<nav>
					<ol>
						{SidebarItems.map((item, index) => (
							<li key={index}>
								<Link to={item.path}>{item.displayName}</Link>
							</li>
						))}
					</ol>
				</nav>
			</main>
			<footer></footer>
		</aside>
	)
};

export default Sidebar;
