import {  TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/react';
import MeetingForm from './MeetingForm/MeetingForm';
import MeetingsList from './MeetingsList/MettingsList';

const MeetingsControl: React.FC = () => {
	return (
		<Tabs variant='enclosed-colored' isFitted>
      <TabList>
        <Tab>Meetings</Tab>
        <Tab>Create Meeting</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MeetingsList/>
        </TabPanel>
        <TabPanel>
          <MeetingForm/>
        </TabPanel>
      </TabPanels>
    </Tabs>
	);
};

export default MeetingsControl;
