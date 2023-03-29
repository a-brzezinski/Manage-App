import { Button, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TransactionsDrawer from './TransactionsDrawer/TransactionsDrawer';
import TransactionsTable from './TransactionsTable/TransactionsTable';

const TransactionsControl: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const transactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	return (
		<Stack>
			<Button m='1em' colorScheme='messenger' onClick={onOpen}>
				Add Transaction
			</Button>
			<TransactionsDrawer isOpen={isOpen} onClose={onClose} />
			{transactions.length === 0 ? (
				<Heading color='gray.500' textAlign='center' as='h3'>
					You don't have any transactions
				</Heading>
			) : (
				<TransactionsTable />
			)}
		</Stack>
	);
};

export default TransactionsControl;
