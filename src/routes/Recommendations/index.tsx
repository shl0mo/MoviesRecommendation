import { useState, useEffect } from 'react'

import {
        CategoryContainer,
        MovieContainer,
        MoviePosterBox,
        MoviePosterImage,
        SectionTitle
} from "../../components";
import { GetMovies } from '../../categories/GetMovies';
import { GetRecommendations } from '../../services/movie.service';
import store from '../../store';


interface RecommendationsReqProps {
	movieId: number;
}


const moviesArray = [];
export function RecommendationsReq (props: RecommendationsReqProps) {
	// const favoritesArray = JSON.parse(store.getState().favoritesArray);
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	
	
	/*if (favoritesArray.length === 0) {
		return (
			<div style={{display: 'flex', alignSelf: 'center'}}>
				<h1 >Nenhum filme favoritado</h1>
			</div>
		)
	}*/
	
	
	async function GetRecommendation (movieId: number): TheMovieDB {
		GetRecommendations(movieId).then((moviesObj) => {
			moviesObj.results.map((movie) => {
				moviesArray.push([
                                        <MoviePosterBox key={movie.id}>
                                                <MoviePosterImage src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} onClick={() => console.log('s')} />
                                        </MoviePosterBox>
				])
			})
			setRecommendedMovies(moviesArray);
		});
		/*setRecommendedMovies([
                                                <MoviePosterBox key={'a'}>
							<h1>Olá</h1>
                                                </MoviePosterBox>
		]);*/
	}
	
	useEffect(() => {
		GetRecommendation(props.movieId);
	}, []);

	useEffect(() => {
		console.log(recommendedMovies);
		/*if (recommendedMovies.length == 1) {
			recommendedMovies?.results.map((movie) => {
				/*moviesArray.push(
                                                <MoviePosterBox key={movie.id}>
                                                        <MoviePosterImage src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} onClick={() => MovieDetails(movie.id)} />
                                                </MoviePosterBox>
				)
			})
		}*/
	}, [recommendedMovies]);
	

	return (
		<CategoryContainer>
                        <MovieContainer>
                                {moviesArray}
                        </MovieContainer>
                </CategoryContainer>
	)
}
