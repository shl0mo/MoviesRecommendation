export function Button ({ children, id, label, color, backgroundColor, onClick }) {
	return (
		<button id={id}  style={{...buttonStyle, color: color, backgroundColor: backgroundColor }} onClick={onClick}>
			<div>
				{ children }
			</div>
			<div>
				{ label }
			</div>
		</button>
	)
}

const buttonStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
	width: '250px'
}
