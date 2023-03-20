import { createSlice } from '@reduxjs/toolkit';
import { TasksStateType } from '../types/types';

interface initialStateType {
	tasks: TasksStateType[];
	tasksContainer: TasksStateType[];
	finishedTasks: TasksStateType[];
	progress: number | string;
}

const initialState: initialStateType = {
	tasks: [],
	tasksContainer: [],
	finishedTasks: [],
	progress: 100,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action) {
			const newTask = action.payload;
			state.tasks.unshift(newTask);
			state.tasksContainer.unshift(newTask);
		},
		filterTasks(state, action) {
			const filterOption = action.payload;
			filterOption === 'all'
				? (state.tasks = state.tasksContainer)
				: (state.tasks = state.tasksContainer.filter(
						task => task.importance === filterOption
				  ));
		},
		deleteTask(state, action) {
			const id = action.payload;
			const existingItem = state.tasks.find(task => task.id === id);

			if (existingItem?.id === id) {
				state.finishedTasks.push(existingItem!);
				state.tasks = state.tasks.filter(task => task.id !== id);
				state.tasksContainer = state.tasksContainer.filter(
					task => task.id !== id
				);
			}
		},
		calculateProgress(state) {
			if (state.tasks.length === 0) {
				state.progress = 100;
			} else {
				const allTasks = [...state.finishedTasks, ...state.tasks];
				const progress = (state.finishedTasks.length / allTasks.length) * 100;
				state.progress = isNaN(progress) ? 0 : progress.toFixed();
			}
		},
	},
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;
