import { useRef, useState } from "react";
import RecommendationCard from "./recommendationCard";
//import { useSwipeable } from "react-swipeable";

export default function SectionRecommendations({
	setPage,
	initialRecommendations,
}) {
	const [recommendations, setRecommendations] = useState(
		initialRecommendations
	);
	const ulRef = useRef(null);
	/*
	// Maybe implement useSwipeable later
	const handlers = useSwipeable({
		onSwipedLeft: handleClickNext,
		onSwipedRight: handleClickPrevious,
		delta: 50,
		swipeDuration: 1000,
		preventScrollOnSwipe: true,
		trackMouse: true,
	});
	*/
	const viewAllRecommendations = () => {
		setPage("recommendations");
		window.scrollTo(0, 0);
	};
	function handleClickPrevious() {
		ulRef.current.style.transition = "all 0.3s";
		ulRef.current.style.transform = "translateX(728px)";
		setTimeout(() => {
			ulRef.current.style.transition = "none";
			ulRef.current.style.transform = "translateX(0)";
			setRecommendations((r) => [...r.slice(14, 21), ...r.slice(0, 14)]);
		}, 250);
	}
	function handleClickNext() {
		ulRef.current.style.transition = "all 0.3s";
		ulRef.current.style.transform = "translateX(-728px)";
		setTimeout(() => {
			ulRef.current.style.transition = "none";
			ulRef.current.style.transform = "translateX(0)";
			setRecommendations((r) => [...r.slice(7, 21), ...r.slice(0, 7)]);
		}, 250);
	}
	if (recommendations.length >= 1)
		return (
			<section className="mt-6">
				<h3 className="font-bold">Recommendations</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<section className="h-36 flex  ">
					<div className="overflow-hidden w-full relative group">
						<ul
							//{...handlers}
							ref={ulRef}
							className={`flex gap-2 max-h-full w-[3000px] relative select-none ${
								recommendations.length > 8 && "-left-[728px]"
							} `}
						>
							{[
								...recommendations.slice(14, 21),
								...recommendations,
							].map((recommendation, i) => (
								<RecommendationCard
									key={i}
									recommendation={recommendation}
								/>
							))}
						</ul>
						{recommendations.length > 8 && (
							<>
								<button
									onClick={handleClickPrevious}
									type="button"
									className="w-7 h-14 rounded-r-full bg-black absolute top-[44px] 
							-left-7 opacity-80 text-white font-bold group-hover:translate-x-7
							transition duration-300"
								>
									<div
										className="h-0 w-0 border-y-[10px] border-y-transparent
									border-r-[10px] border-r-white pl-1"
									/>
								</button>
								<button
									onClick={handleClickNext}
									type="button"
									className="w-7 h-14 rounded-l-full bg-black absolute top-[44px] 
							-right-7 opacity-80 text-white font-bold group-hover:-translate-x-7
							transition duration-300"
								>
									<div
										className="h-0 w-0 border-y-[10px] border-y-transparent
									border-l-[10px] border-l-white ml-3"
									/>
								</button>
							</>
						)}
					</div>{" "}
					<button
						onClick={viewAllRecommendations}
						type="button"
						className="h-full w-24 bg-black/10 hover:opacity-80 transition
						duration-200 right-0 top-0 ml-2 shrink-0 dark:bg-coolBlack/50
						brightness-100 dark:hover:brightness-125"
					>
						View All
					</button>
				</section>
			</section>
		);
}
