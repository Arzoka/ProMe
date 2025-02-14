import styles from './index.module.scss';
import { FC, Fragment, useEffect, useState } from 'react';
import Ball from '@/pages/dashboard/lilguys/create/sub-components/ball/ball.tsx';

const SideBar: FC<{currentColor, setCurrentColor: string}> = ({currentColor, setCurrentColor}) => {
	const [colors, setColors] = useState(['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FFFFFF']);

	useEffect(() => {
		console.log(currentColor);
	}, [currentColor]);

	return (
		<Fragment>
			<aside className={ styles.sideMain }>
				<h2 className={ styles.title }>Create a lil guy!</h2>
				<label className={ styles.name } htmlFor="name">
					<span>Name</span>
					<input type="text" name="name" id="name" />
				</label>
				<label className={ styles.price } htmlFor="price">
					<span>Price</span>
					<input type="text" name="price" id="price" />
				</label>
				<ul className={ styles.ColorList }>
					{ colors.map((color, index) => (
						<li key={index}>
							<button
								className={ styles.ColorSquare }
								style={ {
									background: color,
									...(color === currentColor ? { outline: '2px solid #ffffff' } : {}),
								} }
								onClick={ () => setCurrentColor(color) }
							></button>
						</li>)) }
				</ul>
			</aside>
			<Ball currentColor={ currentColor }/>
		</Fragment>
	);
};

export default SideBar;
