import {
	Table,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
	Td,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const TransactionsTable: React.FC = () => {
	const allTransactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	return (
		<TableContainer bg='white' borderRadius='8px' boxShadow='2xl'>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Type</Th>
						<Th>Details</Th>
						<Th>Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					{allTransactions.map(transaction => {
						let color: string;
						transaction.type === 'expense'
							? (color = 'red')
							: (color = 'green');

						return (
							<Tr key={transaction.id}>
								<Td>{transaction.date}</Td>
								<Td color={color}>{transaction.type.toUpperCase()}</Td>
								<Td>{transaction.details}</Td>
								<Td color={color}>{transaction.amount} EUR</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TransactionsTable;
