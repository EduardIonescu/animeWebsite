import Image from "next/image";

export default function RecommendationCard({ recommendation }) {
	return (
		<li
			className="relative overflow-hidden cursor-pointer transition
    duration-300 hover:opacity-80"
		>
			<Image
				src={recommendation.entry.images.jpg.image_url}
				width={95}
				height={144}
				alt=""
				aria-hidden="true"
				className="h-[144px] w-24 object-cover"
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
        break-words
     "
			>
				{recommendation.entry.title}
			</p>
		</li>
	);
}