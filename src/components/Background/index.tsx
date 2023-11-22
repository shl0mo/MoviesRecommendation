export function Background ({ children }) {
	return (
		<div style={backgroundStyle}>
			{ children }
		</div>
	)
}

const backgroundStyle = {
	color: "#FFF",
	backgroundColor: "#000",
	width: "100vw",
	height: "100wh",
	paddingBottom: '40px',
	marginTop: '75px'
}
