import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Meetings from './pages/Meetings';
import Tasks from './pages/Tasks';
import Transactions from './pages/Transactions';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='tasks' element={<Tasks />} />
			<Route path='transactions' element={<Transactions />} />
			<Route path='meetings' element={<Meetings />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
