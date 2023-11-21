export function Button ({ children, label, color, backgroundColor, onClick }) {
	return (
		<button  style={{...buttonStyle, color: color, backgroundColor: backgroundColor }} onClick={onClick}>
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
