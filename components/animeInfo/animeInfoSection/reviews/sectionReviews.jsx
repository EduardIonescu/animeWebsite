import getData from "../../../../hooks/getData";
import { useEffect, useState } from "react";
import Image from "next/image";
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
				{console.log("asd", reviews)}
				<h3 className="font-bold">Reviews</h3>
				<hr className="border-black/20 my-1" />
				<section>
					{reviews.map((review, i) => (
						<article
							key={i}
							className="flex py-4 border-b-[1px] border-black/10 items-start"
						>
							<Image
								src={review.user.images.jpg.image_url}
								width={44}
								height={64}
								alt=""
								aria-hidden="true"
								className="object-contain"
							/>
							<div className="text-[12px] ml-2">
								<h4>{review.user.username}</h4>
								<button
									type="button"
									className={`px-2 py-[2px] rounded-sm shadow-md font-bold my-2
                  ${
						review.tags[0] == "Recommended"
							? "bg-green-100 text-green-800"
							: review.tags[0] == "Mixed Feelings"
							? "bg-black/10"
							: "bg-red-100 text-darkRed"
					}`}
								>
									{review.tags[0]}
								</button>
								<p className="whitespace-pre-wrap leading-[1.5em] line-clamp-4">
									{review.review}
								</p>
							</div>
						</article>
					))}
				</section>
			</section>
		);
}
