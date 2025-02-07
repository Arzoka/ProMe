import { Fragment } from 'react';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';

const Entrypoint = () => {

	return (
		<Fragment>
			<RouterProvider router={ router } />
		</Fragment> );
};

export default Entrypoint;
