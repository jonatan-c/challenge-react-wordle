/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IStateGlobal } from '../../interfaces/stateGlobal';
import { type AppThunk, type RootState } from '../store';

// Define the initial state using that type
const initialState: IStateGlobal = {
	wordOfTheDay: '',
	turn: 2,
	currentWord: '',
	completedWords: [],
	openModalInfo: false,
	openModalStatistics: false,
};

export const wordleGameSlice = createSlice({
	name: 'wordleGame',
	initialState,
	reducers: {
		wordToPlay: (state, action: PayloadAction<string>) => {
			return {
				...state,
				wordOfTheDay: action.payload,
			};
		},
		addTurn: (state) => {
			return {
				...state,
				turn: state.turn + 1,
			};
		},
		initialTurn: (state) => {
			return {
				...state,
				turn: 2,
			};
		},
		onInputWord: (state, action: PayloadAction<string>) => {
			return {
				...state,
				currentWord: action.payload,
			};
		},
		initialInputWord: (state) => {
			return {
				...state,
				currentWord: '',
			};
		},
		addCompletedWord: (state, action: PayloadAction<string>) => {
			return {
				...state,
				completedWords: [...state.completedWords, action.payload],
			};
		},
		intialCompletedWord: (state) => {
			return {
				...state,
				completedWords: [],
			};
		},
		activeModalInfo: (state) => {
			return {
				...state,
				openModalInfo: true,
			};
		},
		desactiveModalInfo: (state) => {
			return {
				...state,
				openModalInfo: false,
			};
		},
		activeOpenModalStatistics: (state) => {
			return {
				...state,
				openModalStatistics: true,
			};
		},
		desactiveOpenModalStatistics: (state) => {
			return {
				...state,
				openModalStatistics: false,
			};
		},
	},
});

export const setWordToPlay =
	(word: string): AppThunk =>
	(dispatch) => {
		dispatch(wordToPlay(word));
	};
export const addTurnPlay = (): AppThunk => (dispatch) => {
	dispatch(addTurn());
};
export const initialTurnPlay = (): AppThunk => (dispatch) => {
	dispatch(initialTurn());
};
export const onInputWordPlay =
	(word: string): AppThunk =>
	(dispatch) => {
		dispatch(onInputWord(word));
	};

export const {
	wordToPlay,
	addTurn,
	initialTurn,
	onInputWord,
	initialInputWord,
	addCompletedWord,
	intialCompletedWord,
	activeModalInfo,
	desactiveModalInfo,
	activeOpenModalStatistics,
	desactiveOpenModalStatistics,
} = wordleGameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState): any => state.wordleGame;

export default wordleGameSlice.reducer;
