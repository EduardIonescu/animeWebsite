import Image from "next/image";
import Link from "next/link";
export default function RecommendationArticle({ recommendation, index }) {
	const { entry } = recommendation;
	const { mal_id, title, images } = entry;
	return (
		<article className="flex gap-2">
			<Link
				href={`/anime/${mal_id}`}
				className="relative shrink-0 w-52 h-80 border-[1px] block rounded-xl
        overflow-hidden transition duration-300 ease-in shadow-md
         hover:rotate-2 hover:shadow-xl hover:-translate-y-1 group"
			>
				<Image
					src={images.webp.large_image_url}
					fill
					sizes="100%"
					alt=""
					aria-hidden="true"
					className="object-cover"
				/>
				<p
					className="absolute bottom-0 left-0 px-1 pb-1 pt-3 w-full text-center
        bg-gradient-to-t from-white to-transparent text-base
        transition duration-500 ease-out
        font-medium text-darkBlue translate-y-12 group-hover:translate-y-0"
				>
					{title}
				</p>
			</Link>
		</article>
	);
}
