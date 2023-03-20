import { Flex, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { listItemStyles } from '../../Styles/styles';

const Sidebar = () => {
	return (
		<Flex
			flexDirection='column'
			p='1em'
			bg='#343a40'
			h='100%'
			alignItems='center'>
			<List>
				<ListItem style={listItemStyles}>
					<NavLink to='/'>Home</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink to='/tasks'>Tasks</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink to='transactions'>Transactions</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink to='meetings'>Meetings</NavLink>
				</ListItem>
			</List>
		</Flex>
	);
};

export default Sidebar;
