import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { boxTransactionItem } from '../../../Styles/styles';
import {
	MdTrendingDown,
	MdTrendingUp,
	MdAccountBalanceWallet,
} from 'react-icons/md';

const TransactionsItems: React.FC = () => {
	const incomes = useSelector((state: RootState) => state.transactions.incomes);
	const expenses = useSelector(
		(state: RootState) => state.transactions.expenses
	);

	const totalIncomes: number = incomes.reduce((total, item) => (total += item));
	const totalExpenses: number = expenses.reduce(
		(total, item) => (total += item)
	);
	const totalBalace = totalIncomes - totalExpenses;

	return (
		<Flex
			alignItems='center'
			justifyContent='space-around'
			flexDir={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
			border='1px'
			borderColor='gray'
			p='1em'
			borderRadius='8px'
			gap={3}>
			<Box bg='#ccdbfd' style={boxTransactionItem}>
				<Heading as='h3' fontSize='2rem'>
					Expenses
				</Heading>
				<Text mt='1em' fontSize='1.6rem'>
					{-totalExpenses} EUR
				</Text>
				<MdTrendingDown fontSize='2.5rem' />
			</Box>
			<Box bg='#c1d3fe' style={boxTransactionItem}>
				<Heading as='h3' fontSize='2rem'>
					Incomes
				</Heading>
				<Text mt='1em' fontSize='1.6rem'>
					{totalIncomes} EUR
				</Text>
				<MdTrendingUp fontSize='2.5rem' />
			</Box>
			<Box bg='#b6ccfe' style={boxTransactionItem}>
				<Heading as='h3' fontSize='2rem'>
					Balance
				</Heading>
				<Text mt='1em' fontSize='1.6rem'>
					{totalBalace.toFixed(2)} EUR
				</Text>
				<MdAccountBalanceWallet fontSize='2.5rem' />
			</Box>
		</Flex>
	);
};

export default TransactionsItems;
