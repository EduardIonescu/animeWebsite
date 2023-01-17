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

export default function SelectForm() {
	const [genres, setGenres] = useState();
	const [ratings, setRatings] = useState();
	const [year, setYear] = useState();
	const [status, setStatus] = useState();
	const [score, setScore] = useState();
	const [order, setOrder] = useState();
	function handleSubmit(e) {
		e.preventDefault();
		console.log(genres);
	}
	// This should prolly submit too
	function resetForm() {
		setGenres();
		setRatings();
		setYear();
		setStatus();
		setScore();
		setOrder();
	}
	return (
		<form className="" onSubmit={handleSubmit}>
			<fieldset className="flex flex-wrap gap-x-5 gap-y-3">
				<FilterSelect
					placeholder="Genre..."
					options={genreOptions}
					setChoice={setGenres}
				/>
				<FilterSelect
					placeholder="Rating..."
					options={ratingOptions}
					setChoice={setRatings}
				/>
				<FilterSelect
					placeholder="Year..."
					options={yearOptions}
					setChoice={setYear}
				/>
				<FilterSelect
					placeholder="Status..."
					singleValue={true}
					options={statusOptions}
					setChoice={setStatus}
				/>
				<FilterSelect
					placeholder="Score..."
					options={scoreOptions}
					setChoice={setScore}
				/>
				<FilterSelect
					placeholder="Order..."
					options={orderOptions}
					singleValue={true}
					setChoice={setOrder}
				/>
			</fieldset>
			<fieldset className="flex gap-4 justify-center py-3">
				<button type="button" onClick={resetForm}>
					Reset
				</button>
				<button type="submit">Filter</button>
			</fieldset>
		</form>
	);
}
