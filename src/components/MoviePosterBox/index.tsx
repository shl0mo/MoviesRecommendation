interface MoviePosterBoxProps {
	key: string;
	onClick: Any;
}

export function MoviePosterBox ({ children }, props: MoviePosterBoxProps) {
	return (
		<div key={props.key} onClick={props.onClick}>
			{children}
		</div>
	)
}

const moviePosterStyle = {
	width: "300px",
	height: "250px",
}
