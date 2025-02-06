import styles from './index.module.scss';
import { Fragment } from 'react';
import SideBar from './sidebar/index.tsx';
import LilGuyMaker from './lilGuyMaker/index.tsx';

const Create = () => {

	return (
		<Fragment>
			<main>
				<section className={styles.sideBar}>
					<SideBar />
				</section>
				<section className={ styles.lilGuy }>
					<LilGuyMaker />
				</section>
			</main>
		</Fragment>
	);
};

export default Create;
