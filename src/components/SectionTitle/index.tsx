interface SectionTitleProps {
	title: string;
}

export function SectionTitle (props: SectionTitleProps) {
	return (
		<h2 style={sectionTitleProps}>{props.title}</h2>
	)
}

const sectionTitleProps = {
	marginTop: "40px",
	marginBottom: "25px",
	fontSize: "40px"
}
