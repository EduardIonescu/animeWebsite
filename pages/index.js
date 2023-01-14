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
    text-darkBlue"
		>
			<nav className="flex gap-5 mb-5">
				<button
					type="button"
					className="flex items-center gap-1"
					onClick={() => {
						setShowTrending(false);
					}}
				>
					<Image
						src={popularIcon}
						width={14}
						height={14}
						alt=""
						aria-hidden="true"
					/>{" "}
					Popular
				</button>
				<button
					type="button"
					className="flex items-center gap-1"
					onClick={() => {
						setShowTrending(true);
					}}
				>
					<Image
						src={trendingIcon}
						width={16}
						height={16}
						alt=""
						aria-hidden="true"
					/>{" "}
					Trending
				</button>
			</nav>

			<TopAnimeSection showTrending={showTrending} />
		</main>
	);
}
