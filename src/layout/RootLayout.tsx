import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const RootLayout = () => {
	return (
		<Grid
			templateColumns='repeat(6,1fr)'
			templateRows='repeat(6,1fr)'
			minH='100vh'
			maxH='100vh'>
			<GridItem
				as='nav'
				colSpan={{ base: 6, md: 1 }}
				rowSpan={{ base: 1, md: 6 }}>
				<Sidebar />
			</GridItem>
			<GridItem
				p='1em'
				as='main'
				colSpan={{ base: 6, md: 5 }}
				minH='100vh'
				maxH='100vh'>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default RootLayout;
