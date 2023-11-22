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
}


const moviesArray = [];
export function RecommendationsReq (props: RecommendationsReqProps) {
	const navigate = useNavigate();
	const [recommendedMovies, setRecommendedMovies] = useState([]);
		
	async function GetRecommendation (movieId: number): TheMovieDB {
		GetRecommendations(movieId).then((moviesObj) => {
			moviesObj.results.map((movie) => {
				moviesArray.push([
                                        <MoviePosterBox key={movie.id}>
                                                <MoviePosterImage key_={`img-movie-${movie.id}`}src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} />
                                        </MoviePosterBox>
				])
			})
			setRecommendedMovies(moviesArray);
		});
	}
	
	useEffect(() => {
		console.log('Executando 1000');
		GetRecommendation(props.movieId);
	}, []);	

	return (
		<CategoryContainer>
                        <MovieContainer>
                                {moviesArray}
                        </MovieContainer>
                </CategoryContainer>
	)
}
