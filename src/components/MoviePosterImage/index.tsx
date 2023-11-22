interface MoviePosterImage {
	src: string;
	onClick: Any;
	width: string;
	height: string;
	key_: key;
}

export function MoviePosterImage (props: MoviePosterImage) {
	return (
		<img key={props.key_} src={props.src} style={{...moviePosterImageStyle, width: props.width, height: props.height}} onClick={props.onClick}/>
	)
}

const moviePosterImageStyle = {
	cursor: "pointer"
}
