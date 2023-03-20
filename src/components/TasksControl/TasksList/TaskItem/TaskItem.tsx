import { CheckIcon } from '@chakra-ui/icons';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Text,
	useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../../store/tasks-slice';

interface PropsType {
	title: string;
	description: string;
	importance: string;
	id: number;
}

const TaskItem: React.FC<PropsType> = ({
	title,
	description,
	importance,
	id,
}) => {
	const dispatch = useDispatch();
	const toast = useToast();

	let borderColor;

	if (importance === 'urgent') borderColor = 'tomato';
	if (importance === 'important') borderColor = 'blue';
	if (importance === 'notimportant') borderColor = 'green';

	return (
		<Card borderTop='8px' borderColor={borderColor}>
			<CardHeader>
				<Heading as='h4'>{title}</Heading>
			</CardHeader>
			<CardBody>
				<Text>{description}</Text>
			</CardBody>
			<CardFooter justify='right'>
				<Button
					leftIcon={<CheckIcon />}
					colorScheme='green'
					onClick={() => {
						dispatch(tasksActions.deleteTask(id));
						toast({
							title: 'Task Deleted',
							status: 'error',
							duration: 1500,
							isClosable: true,
						});
					}}>
					Done
				</Button>
			</CardFooter>
		</Card>
	);
};

export default TaskItem;
