import Image from "next/image";
import starIcon from "../public/icons/star-icon.svg";
import calendarIcon from "../public/icons/calendar-icon.svg";

export default function AnimeCard({ animeData }) {
	const imageUrl = animeData.images.jpg.image_url;
	const title = animeData.title_english;
	const titleJapanese = animeData.title;
	const score = animeData.score;
	const year = animeData.aired.prop.from.year;
	return (
		<article
			/* card class for linear-gradient background transition */
			className="card w-[380px] border-[1px] flex items-center transition 
			duration-300 gap-4 shadow-md hover:-translate-x-[1px] relative
			hover:-translate-y-[2px] cursor-pointer hover:shadow-xl group rounded-sm 
			overflow-hidden"
		>
			<Image
				src={imageUrl}
				width={85}
				height={120}
				alt=""
				aria-hidden="true"
				className="object-cover h-[120px] w-[85px]"
			/>
			{/* Maybe switch whitespace-nowrap to line-clamp */}
			<div className=" whitespace-nowrap pb-1">
				<p
					className="absolute top-0 text-[11px] bg-darkBlue/75
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-b-md
				"
				>
					<Image
						src={starIcon}
						width={11}
						height={11}
						alt=""
						aria-hidden="true"
						className="h-auto"
					/>
					{score}
				</p>
				<p
					className="absolute top-0 right-0 text-[11px] bg-lighterBlue 
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-bl-md"
				>
					<Image
						src={calendarIcon}
						width={10}
						height={10}
						alt=""
						aria-hidden="true"
						className="h-auto"
					/>{" "}
					{year}
				</p>
				<h2 className="text-base font-medium ">{title}</h2>
				<p className="text-sm opacity-60">{titleJapanese}</p>
			</div>
		</article>
	);
}
