interface MoviePosterImage {
	src: string;
	onClick: Any;
	width: string;
	height: string;
}

export function MoviePosterImage (props: MoviePosterImage) {
	return (
		<img src={props.src} style={{...moviePosterImageStyle, width: props.width, height: props.height}} onClick={props.onClick}/>
	)
}

const moviePosterImageStyle = {
	cursor: "pointer"
}
