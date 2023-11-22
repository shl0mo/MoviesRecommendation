import { createSlice } from '@reduxjs/toolkit';


const favoritesArrayName = 'favoritesArray';
setLocalStorageFavoritesArray();

const Slice = createSlice({
	name: 'movies',
	initialState: {
		favoritesArray: localStorage.getItem(favoritesArrayName),
	},
	reducers: {
		addFavorite (state, { payload }) {
			let favoritesArray = JSON.parse(state.favoritesArray);
			const movieId = payload.movieId;
			let alreadyAdded = false;
			for (let movieInfo of favoritesArray) {
				if (movieInfo.movieId === movieId) alreadyAdded = true;
			}
			if (alreadyAdded) {
				alert('O filme já consta na lista de favoritos');
				return;
			} 
			favoritesArray = [
				...favoritesArray,
				payload
			];
		       	localStorage.setItem(favoritesArrayName, JSON.stringify(favoritesArray));
			state.favoritesArray = localStorage.getItem(favoritesArrayName);
			alert('Filme adicionado na lista de favoritos com sucesso');
		}
	}
})

function setLocalStorageFavoritesArray() {
	console.log('setando o array');
	if (localStorage.getItem(favoritesArrayName) === null)
		localStorage.setItem(favoritesArrayName, JSON.stringify([]));
}

export const { addFavorite } = Slice.actions;
export default Slice.reducer;
