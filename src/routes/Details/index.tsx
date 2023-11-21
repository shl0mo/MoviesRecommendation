import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { MoviePosterImage } from "../../components"

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
