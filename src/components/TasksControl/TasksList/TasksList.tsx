import { Heading, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TaskItem from './TaskItem/TaskItem';

const TaskList: React.FC = () => {
	const tasksList = useSelector((state: RootState) => state.tasks.tasks);
	const container = useSelector(
		(state: RootState) => state.tasks.tasksContainer
	);

	return (
		<SimpleGrid
			mt='1em'
			spacing={2}
			templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
			{tasksList.map(item => (
				<TaskItem
					id={item.id}
					title={item.taskName}
					importance={item.importance}
					description={item.description}
					key={item.id}
				/>
			))}
		</SimpleGrid>
	);
};

export default TaskList;
