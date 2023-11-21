export function CategoryContainer ({ children }) {
	return (
		<div style={categoryContainerStyle}>
			{ children }
		</div>
	)
}

const categoryContainerStyle = {
	display: "flex",
	flexDirection: "column",
	padding: "40px",
}
