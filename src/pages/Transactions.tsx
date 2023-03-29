import { Divider, Heading, Stack } from '@chakra-ui/react';
import TransactionsControl from '../components/TransactionsControl/TransactionsControl';
import { headingStyles } from '../Styles/styles';

const Transactions: React.FC = () => {
	return (
		<Stack>
			<Heading style={headingStyles}>Transactions</Heading>
			<Divider/>
			<TransactionsControl />
		</Stack>
	);
};

export default Transactions;
