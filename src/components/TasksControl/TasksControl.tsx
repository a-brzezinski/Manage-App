import {
	Button,
	Flex,
	Heading,
	Select,
	Spacer,
	useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../store/tasks-slice';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TaskList from './TasksList/TasksList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddIcon } from '@chakra-ui/icons';

const TasksControl: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const tasksList = useSelector((state: RootState) => state.tasks.tasks);

	const dispatch = useDispatch();

	const filterTasksHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(tasksActions.filterTasks(e.target.value));
	};

	return (
		<Flex flexDir='column'>
			<AddTaskForm isOpen={isOpen} onClose={onClose} />
			<Flex
				bg='white'
				p='1em'
				w='100%'
				borderRadius='1em'
				border='dashed #ced4da'>
				<Button leftIcon={<AddIcon />} colorScheme='messenger' onClick={onOpen}>
					Add New Task
				</Button>
				<Spacer />
				<Select
					width={{ base: '40%', lg: '20%' }}
					onChange={filterTasksHandler}>
					<option value='all'>All</option>
					<option value='urgent'>Urgent</option>
					<option value='important'>Imporant</option>
					<option value='notimportant'>Not Important</option>
				</Select>
			</Flex>
			{tasksList.length === 0 && (
				<Heading as='h3' mt='1em' textAlign='center' color='gray.500'>
					No Tasks
				</Heading>
			)}
			<TaskList />
		</Flex>
	);
};

export default TasksControl;
