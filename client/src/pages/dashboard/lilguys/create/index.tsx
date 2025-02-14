import LilGuyMaker from '@/pages/dashboard/lilguys/create/sub-components/lil-guy-maker';
import SideBar from '@/pages/dashboard/lilguys/create/sub-components/sidebar';
import styles from './index.module.scss';
import Ball from '@/pages/dashboard/lilguys/create/sub-components/ball/ball.tsx';
import { useState } from 'react';

const Create = () => {
	const [currentColor, setCurrentColor] = useState<string>('#FF0000');

	return (
		<section className={styles.LilGuyCreateWrapper}>
			<SideBar currentColor={currentColor} setCurrentColor={setCurrentColor} />
			<LilGuyMaker brushColor={currentColor} />
		</section>
	);
};

export default Create;
