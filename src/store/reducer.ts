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
				document.querySelector('#favorite-button').remove();
				return;
			} 
			favoritesArray = [
				...favoritesArray,
				payload
			];
		       	localStorage.setItem(favoritesArrayName, JSON.stringify(favoritesArray));
			state.favoritesArray = localStorage.getItem(favoritesArrayName);
			alert('Filme adicionado na lista de favoritos com sucesso');
		},
		removeFavoriteButton (state, { payload }) {
			const favoritesArray = JSON.parse(state.favoritesArray);
			console.log(favoritesArray);
			const movieId = payload.movieId;
			console.log(movieId);
			for (const favoriteInfo of favoritesArray) {
                		if (favoriteInfo.movieId === movieId) {
	 	                       const favoriteButton =  document.querySelector('#favorite-button');
        		                if (document.contains(favoriteButton)) favoriteButton.remove();
                		        break;
	                	}
        		}
		}
	}
})

function setLocalStorageFavoritesArray() {
	console.log('setando o array');
	if (localStorage.getItem(favoritesArrayName) === null)
		localStorage.setItem(favoritesArrayName, JSON.stringify([]));
}

export const { addFavorite, removeFavoriteButton } = Slice.actions;
export default Slice.reducer;
