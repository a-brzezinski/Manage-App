import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { meetingsActions } from '../../../store/meetings-slice';
import { MeetingStateType } from '../../../types/types';

const MeetingForm: React.FC = () => {
	const [meetingDetails, setMeetingDetails] = useState('');

	const [meetingStartTime, setMeetingStartTime] = useState('');
	const [meetingStartDate, setMeetingStartDate] = useState('');

	const [meetingEndTime, setMeetingEndTime] = useState('');

	const [startMeeting, setStartMeeting] = useState<MeetingStateType>();

	const meetingDetailsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMeetingDetails(e.target.value);
	};

	const startMeetingTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMeetingStartTime(e.target.value);
	};
	const startMeetingDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMeetingStartDate(e.target.value);
	};
	const endMeetingTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMeetingEndTime(e.target.value);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		setStartMeeting({
			details: meetingDetails,
			startMeeting: {
				startTime: meetingStartTime,
				startDate: meetingStartDate,
			},
			endMeeting: {
				endTime: meetingEndTime,
			},
			id: Date.now(),
		});
	}, [meetingStartTime, meetingStartDate, meetingEndTime, meetingDetails]);

	const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(meetingsActions.addMeeting(startMeeting));
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<FormControl mt='1em'>
				<Stack gap={2}>
					<Box>
						<FormLabel color='#48cae4' fontSize='1.4rem'>
							Meeting Details
						</FormLabel>
						<Input
							type='text'
							required
							maxW='500px'
							onChange={meetingDetailsHandler}
						/>
					</Box>
					<Box>
						<FormLabel color='#48cae4' fontSize='1.4rem'>
							Start of the meeting
						</FormLabel>
						<Flex gap={2} flexDir='column' maxW='500px'>
							<Input
								required
								w='100%'
								type='date'
								min='2020-12-31'
								max='2100-12-31'
								onChange={startMeetingDateHandler}
							/>
							<Flex gap={2} w='100%' >
								<Flex flexDir='column' w='100%'>
									<Input
										required
										w='100%'
										type='time'
										onChange={startMeetingTimeHandler}
									/>
									<FormLabel textAlign='center' mt='0.3em' color='#00b4d8'>Start Time</FormLabel>
								</Flex>
								<Flex flexDir='column' w='100%'>
									<Input
										required
										w='100%'
										type='time'
										onChange={endMeetingTimeHandler}
									/>
									<FormLabel textAlign='center' mt='0.3em' color='#48cae4'>End Time</FormLabel>
								</Flex>
							</Flex>
						</Flex>
					</Box>
				</Stack>
			</FormControl>
			<Button mt='2em' type='submit' colorScheme='messenger'>
				Create Meeting
			</Button>
		</form>
	);
};

export default MeetingForm;
