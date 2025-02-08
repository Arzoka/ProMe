import { Fragment } from 'react';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Entrypoint = () => {

	return (
		<Fragment>
			<RouterProvider router={ router } />
			<ToastContainer />
		</Fragment> );
};

export default Entrypoint;
