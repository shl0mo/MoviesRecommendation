import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

import {
	CategoryContainer,
	MovieContainer,
	MoviePosterBox,
	MoviePosterImage,
	SectionTitle
} from "../components";
import { GetMovieDetails } from "../services/movie.details.service";


export function GetMovies (GetCategory: Promise<TheMovieDB>, title: string) {
	const navigate = useNavigate();

	const [movies, SetMovies] = useState<TheMovieDB>();

	useEffect(() => {
		async function fetchData() {
			const movies = await GetCategory();
			SetMovies(movies);
		}
		fetchData();
	}, []);

	async function MovieDetails(idMovie: number) {
		const movieDetail = await GetMovieDetails(idMovie);
		navigate("/details", { state: { movieDetail } });
	}

	return (
		<CategoryContainer>
			<div>
				<SectionTitle title={title}/>
			</div>
			<MovieContainer>
				{movies?.results.map((movie) => {
					return (
						<MoviePosterBox key={movie.id}>
							<MoviePosterImage src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`} onClick={() => MovieDetails(movie.id)} />
						</MoviePosterBox>
					);
				})}
			</MovieContainer>
		</CategoryContainer>
	)
}

