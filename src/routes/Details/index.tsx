import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
	MoviePosterImage,
	Button
} from '../../components';


export function Details () {
	const { state } = useLocation();
	console.log(state);
	if (state === null) window.location.href = "/";
	const movieDetail = state.movieDetail;
	const movieTitle = movieDetail.original_title;
	const posterBackdropPath = movieDetail.backdrop_path;
	const voteAverage = movieDetail.vote_average;
	const voteCount = movieDetail.vote_count;
	const popularity = movieDetail.popularity;
	const overview = movieDetail.overview;
	const tagline = movieDetail.tagline;
	const releaseDate = movieDetail.release_date;
	const releaseYear = releaseDate.split("-")[0];
	const releaseMonth = releaseDate.split("-")[1];
	const releaseDay = releaseDate.split("-")[2];
	const runtime = movieDetail.runtime;
	const genres = movieDetail.genres;
	const posterSrc = `${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${posterBackdropPath}`;
	
	return (
		<div style={wrapperStyle}>
			<div style={detailsContainerStyle}>
				<div>
					<MoviePosterImage src={posterSrc}/>
					<div>
						<h1 style={h1Style}>{movieTitle}</h1>
						<p>{tagline}</p>
						<p><b>Gêneros: </b>{genres.map((genreObject) => `${genreObject.name}, `)}</p>
						<p><b>Data de lançamento: </b>{`${releaseDay}/${releaseMonth}/${releaseYear}`}</p>
						<p><b>Duração: </b>{runtime} minutos</p>
					</div>
				</div>
				<div>	
					<p>
						<b>Avaliação: </b>{voteAverage}<br/>
						<b>Total de avaliações: </b>{voteCount}<br/>
						<b>Polularidade: </b>{popularity}<br/>
					</p>
					<p>
						<b>Sinopse:</b><br/>
						{overview}
					</p>
					<Button label={"Adicionar aos Favoritos"} backgroundColor={"green"} color={"white"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
					</Button>
				</div>
			</div>
		</div>
	)
}

const wrapperStyle = {
	width: "100vw",
	height: "100vh"
}

const detailsContainerStyle = {
	position: "relative",
	width: "50%",
	margin: "0px auto",
	padding: "100px 0px"

}

const h1Style = {
	marginTop: "10px"
}
