import { Divider, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';

import TasksProgress from '../components/HomeItems/TasksProgress/TasksProgress';
import TransactionsItems from '../components/HomeItems/TransactionsItems/TransactionsItems';
import WelcomeItem from '../components/HomeItems/WelcomeItem/WelcomeItem';
import { headingStyles } from '../Styles/styles';

const Home: React.FC = () => {
	return (
		<Stack>
			<Heading style={headingStyles}>Home</Heading>
			<Divider />
			<Grid
				gap={2}
				templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(6,1fr)' }}>
				<GridItem colSpan={{ base: 3, md: 3 }}>
					<WelcomeItem />
				</GridItem>
				<GridItem colSpan={{ base: 3, md: 3 }}>
					<TasksProgress />
				</GridItem>
				<GridItem colSpan={{ base: 3, md: 6, xl: 6 }}>
					<TransactionsItems />
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default Home;
