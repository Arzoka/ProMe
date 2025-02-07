import styles from './index.module.scss';
import { Fragment } from 'react';
import LilGuyMaker from '@/pages/dashboard/lilguys/create/sub-components/lil-guy-maker';
import SideBar from '@/pages/dashboard/lilguys/create/sub-components/sidebar';

const Create = () => {

	return (
		<Fragment>
			<main>
				<section className={ styles.sideBar }>
					<SideBar />
				</section>
				<section className={ styles.lilGuy }>
					<LilGuyMaker />
				</section>
			</main>
		</Fragment> );
};

export default Create;
