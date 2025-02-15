import useApi from '@/hooks/custom/useApi.ts';
import { Link, useParams } from 'react-router-dom';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';
import styles from './index.module.scss';

const SpecificLilGuy = () => {
	const {id} = useParams();
	const {lilguy} = useApi();
	const Lilguy = useAsyncMemo(() => lilguy.get(Number(id)), [id], null);

	return Lilguy ? (
		<section className={styles.LilguyWrapper}>
			<div>
				<figure>
					<img src={ Lilguy.image } alt={ Lilguy.name } />
					<figcaption>
						<Link to={ `/dashboard/users/${ Lilguy.creator.id }` }>
							Created by: { Lilguy.creator.name }
						</Link>
					</figcaption>
				</figure>
				<div>
					<h3>{ Lilguy.price }</h3>
					<button>Purchase</button>
				</div>
			</div>
			<p className={styles.Description}>{Lilguy.description}</p>
		</section> ) : null;
};

export default SpecificLilGuy;