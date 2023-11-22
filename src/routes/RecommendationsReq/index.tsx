import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
        CategoryContainer,
        MovieContainer,
        MoviePosterBox,
        MoviePosterImage,
        SectionTitle
} from "../../components";
import { GetMovies } from '../../categories/GetMovies';
import { GetRecommendations } from '../../services/movie.service';
import { GetMovieDetails } from '../../services/movie.details.service';
import store from '../../store';


interface RecommendationsReqProps {
	movieId: number;
	return: boolean;
}


const moviesArray = [];
const favoritesArray = JSON.parse(store.getState().favoritesArray);
const indexes = [];
export function RecommendationsReq (props: RecommendationsReqProps) {
	const navigate = useNavigate();
	const [recommendedMovies, setRecommendedMovies] = useState([]);	
	async function GetRecommendation (movieId: number): TheMovieDB {
		GetRecommendations(movieId).then((moviesObj) => {
			for (let i = 0; i < 3; i++) {
				let randomIndex = Math.floor(Math.random() * 22);
				while (indexes.includes(randomIndex) || randomIndex >= favoritesArray.length) {
					randomIndex = Math.floor(Math.random() * 22);
				}
				indexes.push(randomIndex);
				const movie = moviesObj.results[randomIndex];
				if (movie && movie.poster_path) {
					moviesArray.push([
        	                                <MoviePosterBox key={movie.id}>
                	                                <MoviePosterImage key_={`img-movie-${movie.id}`}src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} />
                        	                </MoviePosterBox>
					])
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
