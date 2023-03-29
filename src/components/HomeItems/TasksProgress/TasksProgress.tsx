import {
	Flex,
	Heading,
	Text,
	Box,
	CircularProgress,
	CircularProgressLabel,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { tasksActions } from '../../../store/tasks-slice';
import { homeBoxStyle } from '../../../Styles/styles';

const TasksProgress: React.FC = () => {
	const progress = useSelector((state: RootState) => state.tasks.progress);
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const finished = useSelector((state: RootState) => state.tasks.finishedTasks);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(tasksActions.calculateProgress());
	}, []);

	return (
		<Flex
			style={homeBoxStyle}
			justifyContent='center'
			alignItems='center'
			flexDir='column'>
			<Heading as='h4' color='#0096c7' fontSize='2rem'>
				Tasks Progress
			</Heading>
			<Text fontSize='1.2rem'>Total Tasks: {tasks.length}</Text>
			<Text fontSize='1.2rem'>Finished Tasks: {finished.length}</Text>
			<Box mt='1em'>
				<CircularProgress size='90px' value={progress} color='#90e0ef'>
					<CircularProgressLabel>{progress}%</CircularProgressLabel>
				</CircularProgress>
			</Box>
		</Flex>
	);
};

export default TasksProgress;
