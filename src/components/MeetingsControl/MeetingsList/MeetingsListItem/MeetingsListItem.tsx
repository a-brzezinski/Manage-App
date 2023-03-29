import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Box,
	Text,
	Flex,
	Spacer,
	Heading,
} from '@chakra-ui/react';

type Props = {
	details: string;
	startDate: string;
	startTime: string;
	endTime: string;
};

const MeetingsListItem: React.FC<Props> = props => {
	return (
		<Card p='1em'>
			<CardBody>
				<Flex>
					<Box>
						<Heading
							color='#0096c7'
							fontSize='1.5rem'
							as='h3'
							inlineSize='150px'>
							{props.details}
						</Heading>
					</Box>
					<Spacer />
					<Flex flexDir='column' justifyContent='center' fontSize='1,4rem'>
						<Text>{props.startDate}</Text>
						<Text color='gray'>
							{props.startTime}
							{+props.startTime.split(':')[0] <= 12 ? 'AM' : 'PM'}-{props.endTime}
							{+props.endTime.split(':')[0] <= 12 ? 'AM' : 'PM'}
						</Text>
					</Flex>
				</Flex>
			</CardBody>
			<CardFooter>
				<Button
					w='100%'
					colorScheme='messenger'
					rightIcon={<ArrowForwardIcon />}>
					Join Meeting
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MeetingsListItem;
