export function MovieContainer ({ children }) {
	return (
		<div style={movieContainerStyle}>
			{children}
		</div>
	)
}

const movieContainerStyle = {
	display: "flex",
	flexDirection: "row",
	gap: "8px",
	overlow: "hidden",
	overflowX: "scroll",
}
