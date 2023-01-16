import getData from "../../../../hooks/getData";
import { useEffect, useState } from "react";
import Review from "./review";
export default function SectionReviews({ animeId }) {
	const [reviews, setReviews] = useState(false);

	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(
				`https://api.jikan.moe/v4/anime/${animeId}/reviews`
			);
			if (!ignore) {
				setReviews(
					data.data.length >= 3
						? data.data.slice(0, 3)
						: //.sort((a, b) =>
						  //	a.favorites > b.favorites ? -1 : 1
						  //)
						  data.data
				);
			}
		}
		if (animeId) {
			startFetching();
		}
		return () => {
			ignore = true;
		};
	}, [animeId]);
	if (reviews)
		return (
			<section className="mt-6">
				<h3 className="font-bold">Reviews</h3>
				<hr className="border-black/20 my-1" />
				<section>
					{reviews.map((review, i) => (
						<Review key={i} review={review} />
					))}
				</section>
			</section>
		);
}
