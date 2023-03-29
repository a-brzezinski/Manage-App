import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { transactionsActions } from '../../../store/transactions-slice';
import { TransactionsStateType } from '../../../types/types';

interface PropsType {
	isOpen: boolean;
	onClose: () => boolean | void;
}

const TransactionsDrawer: React.FC<PropsType> = props => {
	const dispatch = useDispatch();
	const [expenseType, setExpenseType] = useState('');
	const [details, setDetails] = useState('');
	const [amount, setAmount] = useState('');
	const [expense, setExpense] = useState<TransactionsStateType>();

	const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setExpenseType(e.target.value);
	};

	const detailsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDetails(e.target.value);
	};

	const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value);
	};

	let today = new Date();

	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	let day = today.getDate();

	let currentDay: string;

	if (month < 10) {
		currentDay = `${year}-0${month}-${day}`;
	} else {
		currentDay = `${year}-${month}-${day}`;
	}

	useEffect(() => {
		setExpense({
			date: currentDay,
			type: expenseType,
			details: details,
			amount: +amount,
			id: Date.now(),
		});
	}, [expenseType, details, amount]);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onClose();
		dispatch(transactionsActions.addTransaction(expense));
	};

	return (
		<Drawer isOpen={props.isOpen} onClose={props.onClose} placement='bottom'>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader fontSize='2rem'>Add Transaction</DrawerHeader>
				<DrawerBody>
					<form onSubmit={submitHandler}>
						<FormControl>
							<Box>
								<FormLabel>Type</FormLabel>
								<Select
									placeholder='Select Type'
									required
									onChange={selectChangeHandler}>
									<option value='expense'>Expense</option>
									<option value='income'>Income</option>
								</Select>
								<FormHelperText>Select the type of transaction</FormHelperText>
							</Box>
							<Box mt='1em'>
								<FormLabel>Details</FormLabel>
								<Input onChange={detailsChangeHandler} required type='text' />
								<FormHelperText>Short description</FormHelperText>
							</Box>
							<Box mt='1em'>
								<FormLabel>Amount</FormLabel>
								<NumberInput>
									<NumberInputField required onChange={amountChangeHandler} />
								</NumberInput>
								<FormHelperText>Enter the amount in euros</FormHelperText>
							</Box>
						</FormControl>
						<Button mt='2em' w='150px' type='submit' colorScheme='linkedin'>
							Add
						</Button>
					</form>
				</DrawerBody>
				<DrawerFooter gap={2}>
					<Button onClick={props.onClose}>Cancel</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default TransactionsDrawer;
