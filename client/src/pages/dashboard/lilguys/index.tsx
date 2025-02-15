import styles from './index.module.scss';
import { Fragment } from 'react';
import useApi from '@/hooks/custom/useApi.ts';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';
import { Link } from 'react-router-dom';

const LilGuys = () => {
	const { lilguy } = useApi();
	const Lilguys = useAsyncMemo( () => lilguy.getAll(), [], [] );

	return (
		<Fragment>
			<ol className={styles.LilguysList}>
				{Lilguys.map( ( lilguy, index ) => (
					<li key={index}>
						<Link to={`/dashboard/lilguys/${lilguy.id}`}>
							<img src={ lilguy.image } alt={ `${lilguy.name} by ${lilguy.creator.name}.` } title={ `${lilguy.name} by ${lilguy.creator.name}.` } />
							<p>{ lilguy.name }</p>
							<small>{ lilguy.price }</small>
						</Link>
					</li> ) ) }
			</ol>
		</Fragment> );
};

export default LilGuys;
