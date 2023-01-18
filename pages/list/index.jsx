import SelectForm from "../../components/listPage/selectForm";
import getData from "../../lib/getData";
import { useState } from "react";
import { getAllQueriesURL } from "../../lib/listFilter";
export default function List() {
	const [filterData, setFilterData] = useState([]);
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
			console.log(url);
			const data = await getData(url);
			setFilterData(data.data);
		}
	}

	return (
		<main
			className="w-[75rem] h-[100%] mx-auto py-4 px-4 bg-shadowLightBlue
	text-shadowDarkBlue"
		>
			{console.log(filterData)}
			<SelectForm fetchFilterData={fetchFilterData} />
		</main>
	);
}
