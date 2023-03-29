export interface TasksStateType {
	taskName: string;
	description: string;
	importance: string;
	id: number;
}

export interface TransactionsStateType {
	date: string;
	type: string;
	details: string;
	amount: number;
	id: number;
}

export interface MeetingStateType {
	details: string;
	startMeeting: {
		startTime: string;
		startDate: string;
	};
	endMeeting: {
		endTime: string;
	};
	id: number;
}
