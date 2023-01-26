import { useRef, useState } from "react";
import RecommendationCard from "./recommendationCard";
import ReadMoreButton from "../../../readMoreButton";
import Slider from "react-slick";
import sliderSettings from "../../../../constants/sliderSettings";
import { IRecommendations } from "../../../../constants/sectionInterfaces/IRecommendations";

export default function SectionRecommendations({
	setPage,
	initialRecommendations,
}: {
	setPage: Function;
	initialRecommendations: IRecommendations[];
}) {
	const [recommendations, setRecommendations] = useState(
		initialRecommendations
	);
	const [readMore, setReadMore] = useState(true);
	const ulRef = useRef<HTMLUListElement>(null);

	const viewAllRecommendations = () => {
		setPage("recommendations");
		window.scrollTo(0, 0);
	};
	function handleClickPrevious() {
		if (ulRef.current) {
			ulRef.current.style.transition = "all 0.3s";
			ulRef.current.style.transform = "translateX(728px)";
		}

		setTimeout(() => {
			if (ulRef.current) {
				ulRef.current.style.transition = "none";
				ulRef.current.style.transform = "translateX(0)";
			}

			setRecommendations((r) => [...r.slice(14, 21), ...r.slice(0, 14)]);
		}, 250);
	}
	function handleClickNext() {
		if (ulRef.current) {
			ulRef.current.style.transition = "all 0.3s";
			ulRef.current.style.transform = "translateX(-728px)";
		}

		setTimeout(() => {
			if (ulRef.current) {
				ulRef.current.style.transition = "none";
				ulRef.current.style.transform = "translateX(0)";
			}
			setRecommendations((r) => [...r.slice(7, 21), ...r.slice(0, 7)]);
		}, 250);
	}
	if (recommendations.length >= 1)
		return (
			<section className="mt-6 order-1">
				<h3 className="font-bold hidden xl:block">Recommendations</h3>
				<div className="xl:hidden">
					<ReadMoreButton
						readMore={readMore}
						setReadMore={setReadMore}
						name="Recommendations"
					/>
				</div>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<section className="h-36 hidden xl:flex">
					<div className="overflow-hidden w-full relative group">
						<ul
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
						brightness-100 dark:hover:brightness-125 hidden xl:block"
					>
						View All
					</button>
				</section>
				<section className="xl:hidden list-none">
					{recommendations && recommendations.length >= 3 ? (
						<Slider
							{...sliderSettings}
							nextArrow={<NextArrow />}
							prevArrow={<PrevArrow />}
							className="w-[90%] sm:w-[98%] md:w-[95%] mx-auto px-1"
						>
							{recommendations.map((recommendation, i) => (
								<RecommendationCard
									key={i}
									recommendation={recommendation}
								/>
							))}
						</Slider>
					) : (
						<ul>
							{recommendations.map((recommendation, i) => (
								<RecommendationCard
									key={i}
									recommendation={recommendation}
								/>
							))}
						</ul>
					)}
				</section>
			</section>
		);
}

function NextArrow({
	className,
	style,
	onClick,
}: {
	className?: string;
	style?: any;
	onClick?: any;
}) {
	return (
		<div
			className={`${className} invert dark:invert-0`}
			style={{ ...style, marginRight: "0.3rem" }}
			onClick={onClick}
		></div>
	);
}

function PrevArrow({
	className,
	style,
	onClick,
}: {
	className?: string;
	style?: any;
	onClick?: any;
}) {
	return (
		<div
			className={`${className} invert dark:invert-0`}
			style={{ ...style, marginLeft: "0.3rem" }}
			onClick={onClick}
		></div>
	);
}
