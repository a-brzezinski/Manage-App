import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import MeetingsListItem from './MeetingsListItem/MeetingsListItem';
import _ from 'lodash';

const MeetingsList: React.FC = () => {
	const meetings = useSelector((state: RootState) => state.meetings.meetings);

	const sortedMeetings = _.sortBy(meetings, [
		item => item.startMeeting.startDate,
		item => item.startMeeting.startTime,
	]);

	return (
		<Flex flexDir={{ base: 'column', md: 'row' }} flexWrap='wrap' gap={4}>
			{sortedMeetings.map(item => (
				<MeetingsListItem
					details={item.details}
					startDate={item.startMeeting.startDate}
					startTime={item.startMeeting.startTime}
					endTime={item.endMeeting.endTime}
					key={item.id}
				/>
			))}
		</Flex>
	);
};

export default MeetingsList;
