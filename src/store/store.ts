import {
	type Action,
	configureStore,
	type ThunkAction,
} from '@reduxjs/toolkit';
import wordleGameSlice from './wordleGame';
// import authenticationSlice from './authentication/authenticationSlice';
// import postulationSlice from './postulations/postulationSlice';

const store = configureStore({
	reducer: {
		// Add your reducers here todo
		// authentication: authenticationSlice,
		// postulation: postulationSlice,
		wordleGame: wordleGameSlice,
	},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
