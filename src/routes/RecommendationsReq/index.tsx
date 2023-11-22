import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
        CategoryContainer,
        MovieContainer,
        MoviePosterBox,
        MoviePosterImage,
        SectionTitle
} from '../../components';
import { GetMovies } from '../../categories/GetMovies';
import { GetRecommendations } from '../../services/movie.service';
import { GetMovieDetails } from '../../services/movie.details.service';
import store from '../../store';


interface RecommendationsReqProps {
	movieId: number;
	return: boolean;
}


const moviesArray = [];
const moviesIds = [];
const moviesQuantity = 10;
const favoritesArray = JSON.parse(store.getState().favoritesArray);
if (localStorage.getItem('randomIndexes') === null) {
	localStorage.setItem('randomIndexes', JSON.stringify([]));
}
export function RecommendationsReq (props: RecommendationsReqProps) {
	const navigate = useNavigate();
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const [randomIndexes, setRandomIndexes] = useState([]);

	async function GetRecommendation (movieId: number): TheMovieDB {
		GetRecommendations(movieId).then((moviesObj) => {
			let randomIndex = Math.floor(Math.random() * moviesObj.results.length);
			for (let i = 0; i < moviesQuantity; i++) {
				let randomIndexes = JSON.parse(localStorage.getItem('randomIndexes'));
				if (!randomIndexes.includes(randomIndex)) {
					randomIndexes = [...randomIndexes, randomIndex];
					localStorage.setItem(
						'randomIndexes',
						JSON.stringify(randomIndexes)
					);
				}
			}
			const randomIndexes = JSON.parse(localStorage.getItem('randomIndexes'));
			for (let i = 0; i < moviesQuantity; i++) {
				const movie = moviesObj.results[randomIndexes[i]];
				if (movie && movie.poster_path) {
					if (!moviesIds.includes(movie.id)) {
						moviesIds.push(movie.id);
						moviesArray.push([
        		                                <MoviePosterBox key={movie.id}>
                		                                <MoviePosterImage key_={`img-movie-${movie.id}`}src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} />
                        		                </MoviePosterBox>
						])
					}
				}
			}
			setRecommendedMovies(moviesArray);
		});
	}
	
	useEffect(() => {
		GetRecommendation(props.movieId);
	}, []);	

	if (props.return) {
		return (
			<CategoryContainer>
               	        	<MovieContainer>
                       	        	{moviesArray}
		                       </MovieContainer>
        	        </CategoryContainer>
		)
	}
}
