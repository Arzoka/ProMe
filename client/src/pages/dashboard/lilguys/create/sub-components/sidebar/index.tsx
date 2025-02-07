import styles from './index.module.scss';
import { Fragment } from 'react';

const SideBar = () => {

	return (
		<Fragment>
			<main className={styles.sideMain}>
				<h2 className={styles.title}>Create a lil guy!</h2>
				<figure className={styles.name}>
					<h3>Name</h3>
					<input type="text" name="name" />
				</figure>
				<figure className={styles.price}>
					<h3>Price</h3>
					<input type="text" name="price" />
				</figure>
			</main>
		</Fragment>);
};

export default SideBar;
