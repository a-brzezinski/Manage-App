import { createSlice } from '@reduxjs/toolkit';
import { TransactionsStateType } from '../types/types';

interface inistialStateType {
	transactions: TransactionsStateType[];
	expenses: number[];
	incomes: number[];
}

const initialState: inistialStateType = {
	transactions: [],
	expenses: [0],
	incomes: [0],
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		addTransaction(state, action) {
			const newTransaction = action.payload;
			state.transactions.unshift(newTransaction);

			newTransaction.type === 'expense'
				? state.expenses.push(newTransaction.amount)
				: state.incomes.push(newTransaction.amount);
		},
	},
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;
