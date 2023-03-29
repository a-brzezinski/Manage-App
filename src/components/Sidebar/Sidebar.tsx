import { Flex, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { listItemStyles } from '../../Styles/styles';
import {
	FaHome,
	FaTasks,
	FaMoneyCheckAlt,
	FaRegCalendarAlt,
} from 'react-icons/fa';

const navLinkActive = ({ isActive }: any): any => {
	return {
		color: isActive ? 'white' : '#adb5bd',
	};
};

const Sidebar = () => {
	return (
		<Flex
			flexDirection='column'
			p='1em'
			bg='#001639'
			h='100%'
			alignItems='center'>
			<List display={{base: 'flex', md: 'block'}}>
				<ListItem style={listItemStyles}>
					<NavLink style={navLinkActive as React.CSSProperties} to='/'>
						<FaHome style={navLinkActive as React.CSSProperties} />
					</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink style={navLinkActive as React.CSSProperties} to='/tasks'>
						<FaTasks style={navLinkActive as React.CSSProperties} />
					</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink
						style={navLinkActive as React.CSSProperties}
						to='transactions'>
						<FaMoneyCheckAlt style={navLinkActive as React.CSSProperties} />
					</NavLink>
				</ListItem>
				<ListItem style={listItemStyles}>
					<NavLink style={navLinkActive as React.CSSProperties} to='meetings'>
						<FaRegCalendarAlt style={navLinkActive as React.CSSProperties} />
					</NavLink>
				</ListItem>
			</List>
		</Flex>
	);
};

export default Sidebar;
