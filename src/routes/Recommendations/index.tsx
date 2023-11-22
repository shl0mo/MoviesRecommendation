import { RecommendationsReq } from '../RecommendationsReq';
import store from '../../store';

export function Recommendations () {
	const favoritesArray = JSON.parse(store.getState().favoritesArray);
	let i = 0;
	return (
		<>
			<h2 style={h2Style}>Filmes Recomendados</h2>
			{favoritesArray.map((movie) => {
				if (i !== favoritesArray.length - 1) {
					<RecommendationsReq movieId={movie.movieId}/>
				} else {
					return (
						<RecommendationsReq movieId={movie.movieId}/>
					)
				}
				i++;
			})}		
		</>
	)
}

const h2Style = {
	marginTop: '40px',
	marginLeft: '40px',
	fontSize: '40px'
}
