import { RecommendationsReq } from '../RecommendationsReq';
import store from '../../store';

export function Recommendations () {
	const favoritesArray = JSON.parse(store.getState().favoritesArray);
	let i = 0;
	return (
		<>
			{favoritesArray.map((movie) => {
				console.log(typeof movie.movieId);
				// <RecommendationsReq movieId={movie.movieId}/>
				// if (i === favoritesArray.length - 1) {
					return (
						<RecommendationsReq movieId={movie.movieId}/>
					)
				// }
				// i++;
			})}		
		</>
	)	
}
