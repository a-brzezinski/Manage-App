import { Divider, Heading, Stack } from '@chakra-ui/react';
import TasksControl from '../components/TasksControl/TasksControl';
import { headingStyles } from '../Styles/styles';

const Tasks: React.FC = () => {
	return (
		<Stack>
			<Heading style={headingStyles}>Task Board</Heading>
			<Divider />
			<TasksControl />
		</Stack>
	);
};

export default Tasks;
