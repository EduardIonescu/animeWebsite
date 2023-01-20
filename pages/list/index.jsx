import SelectForm from "../../components/listPage/selectForm";
import getData from "../../lib/getData";
import { useState } from "react";
import { getAllQueriesURL } from "../../lib/listFilter";
import ResultsSection from "../../components/listPage/resultsSection";
export default function List() {
	const [filterData, setFilterData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	async function fetchFilterData(
		genres,
		ratings,
		year,
		status,
		score,
		order
	) {
		if (genres || ratings || year || status || score || order) {
			const url = getAllQueriesURL(
				genres,
				ratings,
				year,
				status,
				score,
				order
			);
			const data = await getData(url);
			setLoading(false);
			setFilterData(data.data);
		}
	}

	return (
		<main
			className="w-[75rem] h-[100%] mx-auto py-4 px-4 bg-shadowLightBlue
	text-shadowDarkBlue min-h-[calc(100vh-64px)]"
		>
			<SelectForm
				fetchFilterData={fetchFilterData}
				setFilterData={setFilterData}
				setLoading={setLoading}
				setError={setError}
			/>

			<p
				aria-hidden={!error}
				className={`text-center text-darkRed transition duration-200 select-none
				ease-out ${error ? "opacity-100" : " opacity-0"}`}
			>
				Please select filters...
			</p>

			<hr className="mt-2 mb-4" />
			{loading ? (
				<section>Loading...</section>
			) : filterData ? (
				<ResultsSection resultsData={filterData} />
			) : (
				typeof filterData == "array" && (
					<section>No results found...</section>
				)
			)}
		</main>
	);
}
