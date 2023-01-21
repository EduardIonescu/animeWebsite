import Image from "next/image";
import AlternativeTitles from "./alternativeTitles";
import Information from "./information";
import Statistics from "./statistics";
import StreamingPlatforms from "./streamingPlatforms";

export default function AnimeInfoAside({ animeData }) {
	return (
		<aside className="w-full xl:w-[25%] px-4 border-r-[1px] order-2 xl:order-1">
			<div className="hidden xl:block h-[400px] w-[268px] relative pb-4">
				<Image
					src={animeData.images.webp.large_image_url}
					fill
					sizes="100%"
					alt={`${animeData.title}'s Image`}
					className=""
				/>
			</div>
			<AlternativeTitles animeData={animeData} />
			<Information animeData={animeData} />
			<Statistics animeData={animeData} />
			{animeData.streaming.length >= 1 && (
				<StreamingPlatforms streaming={animeData.streaming} />
			)}
		</aside>
	);
}
