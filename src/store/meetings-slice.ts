import { createSlice } from '@reduxjs/toolkit';
import { MeetingStateType } from '../types/types';

interface initialStateType {
	meetings: MeetingStateType[];
}

const initialState: initialStateType = {
	meetings: [],
};

const meetingsSlice = createSlice({
	name: 'meetings',
	initialState,
	reducers: {
		addMeeting(state, action) {
			const createdMeeting = action.payload;
			state.meetings.push(createdMeeting);
		},
	},
});

export const meetingsActions = meetingsSlice.actions;
export default meetingsSlice;
