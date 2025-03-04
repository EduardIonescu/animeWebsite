"use client";

import {
  genreOptions,
  orderOptions,
  ratingOptions,
  scoreOptions,
  statusOptions,
  yearOptions,
} from "@/constants/list";
import { useState } from "react";
import FilterSelect from "./filterSelect";

// @typescript-eslint/no-explicit-any
type SelectFormProps = {
  fetchFilterData: any;
  setFilterData: any;
  setLoading: any;
  setError: any;
};

export default function SelectForm({
  fetchFilterData,
  setFilterData,
  setLoading,
  setError,
}: SelectFormProps) {
  const [genres, setGenres] = useState("");
  const [ratings, setRatings] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");
  const [score, setScore] = useState("");
  const [order, setOrder] = useState("");

  async function handleSubmit(e: React.FormEvent<EventTarget>) {
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
      <fieldset
        className="flex flex-wrap gap-x-[4%] lg:gap-x-[2%] xl:gap-x-5 gap-y-2
			 xl:gap-y-3"
      >
        <FilterSelect
          placeholder="Genre..."
          options={genreOptions}
          setChoice={setGenres}
          value={genres}
          classes="w-full lg:w-[49%]"
        />
        <FilterSelect
          placeholder="Rating..."
          options={ratingOptions}
          setChoice={setRatings}
          value={ratings}
          classes="w-full lg:w-[49%]"
        />
        <FilterSelect
          placeholder="Year..."
          options={yearOptions}
          singleValue={true}
          setChoice={setYear}
          value={year}
          classes="w-[48%] lg:w-[23.5%]"
        />
        <FilterSelect
          placeholder="Status..."
          singleValue={true}
          options={statusOptions}
          setChoice={setStatus}
          value={status}
          classes="w-[48%] lg:w-[23.5%]"
        />
        <FilterSelect
          placeholder="Score..."
          options={scoreOptions}
          setChoice={setScore}
          singleValue={true}
          value={score}
          classes="w-[48%] lg:w-[23.5%]"
        />
        <FilterSelect
          placeholder="Order..."
          options={orderOptions}
          singleValue={true}
          setChoice={setOrder}
          value={order}
          classes="w-[48%] lg:w-[23.5%]"
        />
      </fieldset>
      <fieldset
        className="flex gap-4 justify-center py-3 text-shadowLightBlue
			font-medium mt-1"
      >
        <button
          type="button"
          onClick={resetForm}
          className="bg-darkRed px-3 py-1 rounded-md border-[2px] font-semibold
					border-transparent transition duration-200 ease-out shadow-md
					border-darkRed hover:brightness-125 hover:shadow-lg
					"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-lighterBlue px-3 py-1 rounded-md border-[2px] font-semibold
					border-transparent transition duration-200 ease shadow-md
					 border-lighterBlue hover:brightness-125 hover:shadow-lg
					"
        >
          Filter
        </button>
      </fieldset>
    </form>
  );
}
