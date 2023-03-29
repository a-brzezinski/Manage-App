import { configureStore } from '@reduxjs/toolkit';
import meetingsSlice from './meetings-slice';
import tasksSlice from './tasks-slice';
import transactionsSlice from './transactions-slice';

const store = configureStore({
	reducer: {
		tasks: tasksSlice.reducer,
		transactions: transactionsSlice.reducer,
		meetings: meetingsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
