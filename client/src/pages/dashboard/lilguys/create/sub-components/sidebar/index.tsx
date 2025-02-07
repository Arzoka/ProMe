import styles from './index.module.scss';

const SideBar = () => {

	return (
		<aside className={ styles.sideMain }>
			<h2 className={ styles.title }>Create a lil guy!</h2>
			<label className={ styles.name } htmlFor={ 'name' } >
				<span>Name</span>
				<input type="text" name="name" id="name" />
			</label>
			<label className={ styles.price } htmlFor={ 'price' }>
				<span>Price</span>
				<input type="text" name="price" id={ 'price' } />
			</label>
		</aside> );
};

export default SideBar;
