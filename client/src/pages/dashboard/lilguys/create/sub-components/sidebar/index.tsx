import styles from './index.module.scss';

const SideBar = () => {

	return (
		<aside className={ styles.sideMain }>
			<h2 className={ styles.title }>Create a lil guy!</h2>
			<figure className={ styles.name }>
				<h3>Name</h3>
				<input type="text" name="name" />
			</figure>
			<figure className={ styles.price }>
				<h3>Price</h3>
				<input type="text" name="price" />
			</figure>
		</aside> );
};

export default SideBar;
