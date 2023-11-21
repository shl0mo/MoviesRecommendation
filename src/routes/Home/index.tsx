import {
	Popular,
	TopRated,
	Comedy,
	Action,
	Adventure,
	Romance
} from "../../categories";

export function Home () {
	return (
		<>
			<Popular/>
			<TopRated/>
			<Comedy/>
			<Action/>
			<Adventure/>
			<Romance/>
		</>
	)
}
