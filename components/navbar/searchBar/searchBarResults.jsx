export default function SearchBarResults({ resultsData }) {
	return (
		<div className="absolute z-20 text-darkBlue">
			{console.log(resultsData)}
			{resultsData ? <ul>asd</ul> : <div>Loading...</div>}
		</div>
	);
}
