import { Flex, Heading, Text } from '@chakra-ui/react';

import { homeBoxStyle } from '../../../Styles/styles';

const WelcomeItem: React.FC = () => {
	const date = new Date();
	const dayIndex = date.getDay();

	const weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const getWeekDay = (index: number) => weekDays[index];
	const currentDay = getWeekDay(dayIndex);
	const currentDate = date.toLocaleDateString();

	return (
		<Flex style={homeBoxStyle} flexDir='column' justifyContent='space-around'>
			<Heading fontSize='2rem' as='h4' color='#0096c7'>
				Hello!
			</Heading>
			<Text fontSize='1.2rem'>Welcome, We hope all is well with you.</Text>
			<Text fontStyle='italic' mt='1em'>
				{currentDay} | {currentDate}
			</Text>
		</Flex>
	);
};

export default WelcomeItem;
