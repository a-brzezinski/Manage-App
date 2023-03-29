import { Divider, Heading, Stack } from '@chakra-ui/react';
import MeetingsControl from '../components/MeetingsControl/MeetingsControl';
import { headingStyles } from '../Styles/styles';

const Meetings: React.FC = () => {
	return <Stack>
		<Heading style={headingStyles}>Meetings</Heading>
		<Divider/>
		<MeetingsControl/>
	</Stack>;
};

export default Meetings;
