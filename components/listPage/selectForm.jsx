import FilterSelect from "../../components/listPage/filterSelect";
import { useState } from "react";
import {
	genreOptions,
	scoreOptions,
	yearOptions,
	ratingOptions,
	statusOptions,
	orderOptions,
} from "../../constants/listConstants";

export default function SelectForm({
	fetchFilterData,
	setFilterData,
	setLoading,
	setError,
}) {
	const [genres, setGenres] = useState(undefined);
	const [ratings, setRatings] = useState(undefined);
	const [year, setYear] = useState(undefined);
	const [status, setStatus] = useState();
	const [score, setScore] = useState(undefined);
	const [order, setOrder] = useState(undefined);
	async function handleSubmit(e) {
		e.preventDefault();
		if (
			(genres && genres.length >= 1) ||
			(ratings && genres.length >= 1) ||
			year ||
			status ||
			score ||
			order
		) {
			setError(false);
			setLoading(true);
			fetchFilterData(genres, ratings, year, status, score, order);
		} else {
			setError(true);
		}
	}
	// This should prolly submit too
	function resetForm() {
		setGenres("");
		setRatings("");
		setYear("");
		setStatus("");
		setScore("");
		setOrder("");
		setError(false);
		setFilterData("");
	}
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="flex flex-wrap gap-x-5 gap-y-3">
				<FilterSelect
					placeholder="Genre..."
					options={genreOptions}
					setChoice={setGenres}
					value={genres}
				/>
				<FilterSelect
					placeholder="Rating..."
					options={ratingOptions}
					setChoice={setRatings}
					value={ratings}
				/>
				<FilterSelect
					placeholder="Year..."
					options={yearOptions}
					singleValue={true}
					setChoice={setYear}
					value={year}
				/>
				<FilterSelect
					placeholder="Status..."
					singleValue={true}
					options={statusOptions}
					setChoice={setStatus}
					value={status}
				/>
				<FilterSelect
					placeholder="Score..."
					options={scoreOptions}
					setChoice={setScore}
					singleValue={true}
					value={score}
				/>
				<FilterSelect
					placeholder="Order..."
					options={orderOptions}
					singleValue={true}
					setChoice={setOrder}
					value={order}
				/>
			</fieldset>
			<fieldset
				className="flex gap-4 justify-center py-3 text-shadowLightBlue
			font-medium"
			>
				<button
					type="button"
					onClick={resetForm}
					className="bg-darkRed px-3 py-1 rounded-md border-[2px] 
					border-transparent transition duration-300 ease-in shadow-md
					hover:text-darkRed hover:bg-transparent border-darkRed
					"
				>
					Reset
				</button>
				<button
					type="submit"
					className="bg-lighterBlue px-3 py-1 rounded-md border-[2px] 
					border-transparent transition duration-300 ease-in shadow-md
					hover:text-lighterBlue hover:bg-transparent border-lighterBlue
					"
				>
					Filter
				</button>
			</fieldset>
		</form>
	);
}