import { useState, useEffect } from "react";
import getData from "../../../../hooks/getData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import RecommendationCard from "./recommendationCard";

export default function SectionRecommendations({ animeId }) {
	const [recommendations, setRecommendations] = useState(false);

	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(
				`https://api.jikan.moe/v4/anime/${animeId}/recommendations`
			);
			if (!ignore) {
				setRecommendations(
					data.data.length >= 21 ? data.data.slice(0, 21) : data.data
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
	if (recommendations)
		return (
			<section className="mt-6">
				{console.log("dsa", recommendations)}
				<h3 className="font-bold">Recommendations</h3>
				<hr className="border-black/20 my-1" />
				<section className="h-36 flex  ">
					<div className="overflow-hidden w-full relative group">
						<ul
							className="flex gap-2 max-h-full w-[3000px] 
						hover:-translate-x-[500px] transition duration-300 "
						>
							{recommendations.map((recommendation, i) => (
								<RecommendationCard
									key={i}
									recommendation={recommendation}
								/>
							))}
						</ul>
						<button
							type="button"
							className="w-7 h-14 rounded-r-full bg-black absolute top-[44px] 
							-left-7 opacity-80 text-white font-bold group-hover:translate-x-7
							transition duration-300"
						>
							&lt;
						</button>
						<button
							type="button"
							className="w-7 h-14 rounded-l-full bg-black absolute top-[44px] 
							-right-7 opacity-80 text-white font-bold group-hover:-translate-x-7
							transition duration-300"
						>
							&gt;
						</button>
					</div>{" "}
					<button
						type="button"
						className="h-full w-24 bg-black/10 hover:opacity-80 transition
						duration-200  right-0 top-0 ml-2 shrink-0"
					>
						View All
					</button>
				</section>
			</section>
		);
}
