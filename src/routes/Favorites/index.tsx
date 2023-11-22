import store from '../../store';

export function Favorites () {
	const favoritesArray = JSON.parse(store.getState().favoritesArray);
	console.log(favoritesArray);
	if (favoritesArray.length === 0) {
		return (
			<h1>Nenhum filme foi favoritado</h1>
		)
	} else {
		return (
			<div style={tableContainerStyle}>
				<h2>Lista de Favoritos</h2>
				<table style={tableStyle}>
					<tbody>
						{favoritesArray.map((favoriteInfo, index) => {
							return (
								<tr key={`tr-favorites-${index}`}>
									<td key={`td-id-favorites-${index}`}>
										<input key={`input-id-favorites-${index}`} type={'hidden'} value={favoriteInfo.movieId} readOnly/>
									</td>
									<td key={`td-img-favorites-${index}`}>
										<img key={`img-favorites-${index}`} src={favoriteInfo.posterSrc} style={posterImageStyle}/>
									</td>
									<td key={`td-title-favorites-${index}`}>
										<h3 key={`title-favorites-${index}`}>{favoriteInfo.movieTitle}</h3>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

const tableContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	alignItems: 'center',
	marginTop: '50px'
}

const tableStyle = {
	marginTop: '5px'
}

const posterImageStyle = {
	width: '200px',
	height: '100px',
	borderRadius: '5px',
	marginRight: '15px',
	marginBottom: '10px'
}
