import TopAnimeSection from "../components/topAnime/topAnimeSection";
import { useState } from "react";
import Image from "next/image";
import popularIcon from "../public/icons/popular-icon.svg";
import trendingIcon from "../public/icons/trending-icon.svg";
import getData from "../lib/getData";
import { popularAnimeUrls, trendingAnimeUrls } from "../constants/urls";

export async function getStaticProps() {
	// I want 50 items, the limit is 25 per page

	const popularAnimeData = await Promise.all(
		popularAnimeUrls.map(async (url) => {
			return await getData(url);
		})
	);
	const trendingAnimeData = await Promise.all(
		trendingAnimeUrls.map(async (url) => {
			return await getData(url);
		})
	);
	return {
		props: {
			popularAnimeData: [
				...popularAnimeData[0].data,
				...popularAnimeData[1].data,
			],
			trendingAnimeData: [
				...trendingAnimeData[0].data,
				...trendingAnimeData[1].data,
			],
		},
	};
}

export default function Home({ popularAnimeData, trendingAnimeData }) {
	const [showTrending, setShowTrending] = useState(false);
	return (
		<main
			className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] h-[100%]
			mx-auto py-4 px-4 bg-shadowLightBlue dark:bg-veryDarkBlue
			 dark:text-veryLightGray text-shadowDarkBlue"
		>
			<nav className="flex gap-5 mb-6 ml-2">
				<button
					type="button"
					className={`flex items-center gap-1 relative
					before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-2 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-lighterBlue dark:text-veryLightGray
      ${
			!showTrending
				? "text-darkBlue before:scale-x-100"
				: "text-darkBlue before:opacity-50 hover:before:scale-x-100"
		}`}
					onClick={() => {
						setShowTrending(false);
					}}
				>
					<div
						className="relative shrink-0 w-[16px] h-[16px] 
					"
					>
						<Image
							src={popularIcon}
							fill
							sizes="100%"
							alt=""
							aria-hidden="true"
						/>
					</div>{" "}
					Popular
				</button>
				<button
					type="button"
					className={`flex items-center gap-1 relative
					before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-2 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-lighterBlue dark:text-veryLightGray
      ${
			showTrending
				? "text-darkBlue before:scale-x-100"
				: "text-darkBlue before:opacity-50 hover:before:scale-x-100"
		}`}
					onClick={() => {
						setShowTrending(true);
					}}
				>
					{" "}
					<div className="relative shrink-0 w-4 h-4">
						<Image
							src={trendingIcon}
							fill
							sizes="100%"
							alt=""
							aria-hidden="true"
						/>
					</div>{" "}
					Trending
				</button>
			</nav>

			<TopAnimeSection
				showTrending={showTrending}
				popularAnimeData={popularAnimeData}
				trendingAnimeData={trendingAnimeData}
			/>
		</main>
	);
}
