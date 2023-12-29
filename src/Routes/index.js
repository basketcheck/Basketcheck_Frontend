import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Loading from '../Pages/Loading/Loading.jsx';

const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<Loading />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: '/auth',
			children: [
				{ path: 'signin', element: <SignIn /> },
				{ path: 'signup', element: <SignUp /> },
			],
		},
		{
			path: '/',
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/loading', element: <Loading /> },
				{ path: '/draw', element: <Draw /> },
				{ path: '/starting', element: <Starting /> },
				{ path: '/bench', element: <Bench /> },
				{ path: '/404', element: <Page404 /> },
				{ path: '*', element: <Navigate to='/404' replace /> },
			],
		},
		{ path: '*', element: <Navigate to='/404' replace /> },
	]);
}

//Pages
const Home = Loadable(lazy(() => import('../Pages/Main/Main.jsx')));

const Page404 = Loadable(
	lazy(() => import('../Pages/Page404/Page404.jsx'))
);

const SignIn = Loadable(lazy(() => import('../Pages/SignIn/SignIn.jsx')));

const SignUp = Loadable(lazy(() => import('../Pages/SignUp/SignUp.jsx')));

const Draw = Loadable(lazy(() => import('../Pages/Draw/Draw.jsx')));

const Starting = Loadable(
	lazy(() => import('../Pages/Starting/Starting.jsx'))
);

const Bench = Loadable(lazy(() => import('../Pages/Bench/Bench.jsx')));
