import TopAnimeSection from "../components/topAnime/topAnimeSection";
import { useState } from "react";

export default function Home() {
	const [showTrending, setShowTrending] = useState(false);
	return (
		<main
			className="w-[75rem] h-[100%] mx-auto py-4 px-4 bg-shadowLightBlue
    text-darkBlue"
		>
			<nav className="flex gap-4 mb-5">
				<button
					type="button"
					onClick={() => {
						setShowTrending(false);
					}}
				>
					Popular
				</button>
				<button
					type="button"
					onClick={() => {
						setShowTrending(true);
					}}
				>
					Trending
				</button>
			</nav>

			<TopAnimeSection showTrending={showTrending} />
		</main>
	);
}
