import { RecommendationsReq } from '../RecommendationsReq';
import store from '../../store';


const favoritesArray = JSON.parse(store.getState().favoritesArray);
const moviesRecommendationsArray = [];
if (favoritesArray.length > 3) {
	for (let i = 0; i < 3; i++) {
		const i = Math.floor(Math.random() * 3);
		moviesRecommendationsArray.push(favoritesArray[i]);
	}
} else {
	favoritesArray.map((movie) => {
		moviesRecommendationsArray.push(movie);
	})
}

console.log('moviesRecommendationArray: ' + moviesRecommendationsArray);
export function Recommendations () {
	return (
		<>
			<h2 style={h2Style}>Filmes Recomendados</h2>
			{moviesRecommendationsArray.map((movie, index) => {
				if (index !== 2) {
				return (
					<RecommendationsReq movieId={movie.movieId}/>
					
				)
				} else {
					return (
						<RecommendationsReq return={true} movieId={movie.movieId}/>
					)
				}
				
			})}
		</>
	)
}

const h2Style = {
	marginTop: '40px',
	marginLeft: '40px',
	fontSize: '40px'
}
