export function Navbar () {
	const links = [['/', 'Home'], ['/Favoritos', 'Favoritos'], ['/', 'Recomendações']];

	return (
		<nav style={navStyle}>
			<ul style={ulStyle}>
				{links.map((link, index) => {
					return (
						<li key={`nav-li-${index}`} style={liStyle}>
							<a key={`a-li-${index}`} href={link[0]} style={aStyle}>
								{ link[1] }
							</a>
						</li>
					)
				})}
			</ul>		
		</nav>
	);
}

const navStyle = {
	display: 'flex',
	height: '60px',
	justifyContent: 'center',
	alignItems: 'flex-end',
	backgroundColor: 'black',
	paddingBottom: '18px',
	boxShadow: '2px 5px 10px rgba(0,0,0,0.4)'
}

const ulStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
	margin: 0,
	width: '30%',
	listStyleType: 'none',
}

const liStyle = {
	fontSize: '22.5px',
	borderBottom: '2px solid white',
	color: 'white'
}

const aStyle = {
	color: 'white',
	weight: 'bold'
}
