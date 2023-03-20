import {
	Box,
	Divider,
	Grid,
	GridItem,
	Heading,
	Text,
	Stack,
	CircularProgress,
	CircularProgressLabel,
	Flex,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { tasksActions } from '../store/tasks-slice';

import { headingStyles, homeBoxStyle } from '../Styles/styles';

const Home: React.FC = () => {
	const progress = useSelector((state: RootState) => state.tasks.progress);
	const allTasks = useSelector((state: RootState) => state.tasks.concatArray);
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const container = useSelector(
		(state: RootState) => state.tasks.tasksContainer
	);
	const finished = useSelector((state: RootState) => state.tasks.finishedTasks);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(tasksActions.calculateProgress());
	}, []);

	console.log(tasks);
	console.log(container);
	console.log(finished);
	console.log(progress);

	const date = new Date();
	const dayIndex = date.getDay();

	const weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const getWeekDay = (index: number) => weekDays[index];
	const currentDay = getWeekDay(dayIndex);
	const currentDate = date.toLocaleDateString();

	return (
		<Stack>
			<Heading style={headingStyles}>Home</Heading>
			<Divider />
			<Grid
				gap={2}
				templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(6,1fr)' }}>
				<GridItem colSpan={3}>
					<Flex
						style={homeBoxStyle}
						flexDir='column'
						justifyContent='space-around'>
						<Heading fontSize='2rem' as='h4' color='blue.400'>
							Hello User!
						</Heading>
						<Text fontSize='1.4rem'>
							Welcome Home, We hope all is well with you.
						</Text>
						<Text fontStyle='italic' mt='1em'>
							{currentDay} | {currentDate}
						</Text>
					</Flex>
				</GridItem>
				<GridItem colSpan={3}>
					<Flex
						style={homeBoxStyle}
						justifyContent='center'
						alignItems='center'
						flexDir='column'>
						<Heading as='h4' color='blue.600' fontSize='2rem'>
							Tasks Progress
						</Heading>
						<Text>Total Tasks: {tasks.length}</Text>
						<Text>Finished Tasks: {finished.length}</Text>
						<Box mt='1em'>
							<CircularProgress size='90px' value={progress} color='purple.600'>
								<CircularProgressLabel>{progress}%</CircularProgressLabel>
							</CircularProgress>
						</Box>
					</Flex>
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default Home;
