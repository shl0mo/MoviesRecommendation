import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
	name: 'movies',
	initialState: {
		favoritesArray: [],
	},
	reducers: {
		addFavorite: (state, { payload }) => {
			state.favoritesArray = [
				...state.favoritesArray,
				payload
			];
		}
	}
})

export const { addFavorite } = Slice.actions;
export default Slice.reducer;
