import Image from "next/image";
import Link from "next/link";

export default function RecommendationCard({ recommendation }) {
	return (
		<li
			className="relative overflow-hidden cursor-pointer transition
    duration-300 light:hover:opacity-80 brightness-100 dark:hover:brightness-75"
		>
			<Link
				href={`/anime/${recommendation.entry.mal_id}`}
				className="h-[144px] w-24 relative block"
			>
				<Image
					src={recommendation.entry.images.webp.image_url}
					fill
					sizes="100%"
					alt=""
					aria-hidden="true"
					className="object-cover"
				/>
				<p
					className="absolute top-0 right-0 bg-black text-shadowLightBlue
      text-[11px] px-1 opacity-80"
				>
					{recommendation.votes} Users
				</p>
				<p
					className="absolute bottom-0 left-0 text-white text-[12px] 
        bg-gradient-to-t from-black to-transparent pt-1 pb-[1px] px-1 
        break-words w-full max-h-10
     "
				>
					{recommendation.entry.title}
				</p>
			</Link>
		</li>
	);
}
