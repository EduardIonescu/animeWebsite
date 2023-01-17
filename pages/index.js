import TopAnimeSection from "../components/topAnime/topAnimeSection";
import { useState } from "react";
import Image from "next/image";
import popularIcon from "../public/icons/popular-icon.svg";
import trendingIcon from "../public/icons/trending-icon.svg";

export default function Home() {
	const [showTrending, setShowTrending] = useState(false);
	return (
		<main
			className="w-[75rem] h-[100%] mx-auto py-4 px-4 bg-shadowLightBlue
    text-shadowDarkBlue"
		>
			<nav className="flex gap-5 mb-6 ml-2">
				<button
					type="button"
					className={`flex items-center gap-1 relative
					before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-2 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-lighterBlue
      ${
			!showTrending
				? "text-darkBlue before:scale-x-100"
				: "text-darkBlue before:opacity-50 hover:before:scale-x-100"
		}`}
					onClick={() => {
						setShowTrending(false);
					}}
				>
					<div className="relative shrink-0 w-[16px] h-[16px]">
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
							before:bg-lighterBlue
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

			<TopAnimeSection showTrending={showTrending} />
		</main>
	);
}
