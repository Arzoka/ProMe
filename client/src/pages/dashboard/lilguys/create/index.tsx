import LilGuyMaker from '@/pages/dashboard/lilguys/create/sub-components/lil-guy-maker';
import SideBar from '@/pages/dashboard/lilguys/create/sub-components/sidebar';
import styles from './index.module.scss';

const Create = () => {

	return (
		<section className={styles.LilGuyCreateWrapper}>
			<SideBar />
			<LilGuyMaker />
		</section> );
};

export default Create;
