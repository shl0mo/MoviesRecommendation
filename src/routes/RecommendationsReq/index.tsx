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
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	
	async function MovieDetails(movieId: number) {
                const movieDetail = await GetMovieDetails(movieId);
                navigate("/details", { state: { movieDetail } });
        }
	
	async function GetRecommendation (movieId: number): TheMovieDB {
		GetRecommendations(movieId).then((moviesObj) => {
			moviesObj.results.map((movie) => {
				moviesArray.push([
                                        <MoviePosterBox key={movie.id}>
                                                <MoviePosterImage src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} onClick={() => MovieDetails(props.movieId)} />
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
