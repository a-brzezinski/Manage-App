import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks-slice';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

interface TaskData {
	taskName: string;
	importance: string;
	description: string;
	id: number;
}

const AddTaskForm: React.FC<Props> = ({ isOpen, onClose }) => {
	const [taskName, setTaskName] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [selectValue, setSelectValue] = useState('');
	const [taskData, setTaskData] = useState<TaskData>();
	const toast = useToast();

	const dispatch = useDispatch();

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskName(e.target.value);
	};
	const descriptionChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setDescriptionValue(e.target.value);
	};
	const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
	};

	useEffect(() => {
		setTaskData({
			taskName: taskName,
			description: descriptionValue,
			importance: selectValue,
			id: Date.now(),
		});
	}, [taskName, selectValue, descriptionValue]);

	const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		dispatch(tasksActions.addTask(taskData));

		toast({
			title: 'Task Added',
			status: 'success',
			duration: 2000,
			isClosable: true,
		});

		onClose();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign='center' color='purple.400'>
						Add Task
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={formSubmitHandler}>
							<FormControl>
								<FormLabel>Task Title</FormLabel>
								<Input
									placeholder='Enter task name'
									onChange={inputChangeHandler}
									required
									type='text'
								/>
								<FormLabel mt='1em'>Description</FormLabel>
								<Textarea required onChange={descriptionChangeHandler} />
								<FormLabel mt='1em'>Pick importance</FormLabel>
								<Select onChange={selectChangeHandler}>
									<option value='urgent'>Urgent</option>
									<option value='important'>Imporant</option>
									<option value='notimportant'>Not Important</option>
								</Select>
							</FormControl>
							<Button type='submit' mt='2em' colorScheme='purple'>
								Add Task
							</Button>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddTaskForm;
