import Image from "next/image";
import starIcon from "../public/icons/star-icon.svg";
import calendarIcon from "../public/icons/calendar-icon.svg";
import Link from "next/link";

export default function AnimeCard({ animeData }) {
	const imageUrl = animeData.images.jpg.image_url;
	const title = animeData.title_english;
	const titleJapanese = animeData.title;
	const score = animeData.score;
	const year = animeData.aired.prop.from.year;
	const id = animeData.mal_id;
	return (
		<Link href={`/anime/${id}`}>
			<article
				/* card class for linear-gradient background transition */
				className="card w-[380px] border-[1px] flex items-center transition 
			duration-300 gap-4 shadow-md hover:-translate-x-[1px] relative
			hover:-translate-y-[2px] cursor-pointer hover:shadow-xl group rounded 
			overflow-hidden dark:bg-darkBlueDark dark:border-darkBlue 
			dark:hover:shadow-black/30 dark:hover:shadow-lg "
			>
				<div className="relative h-[120px] w-[85px] shrink-0">
					<Image
						src={imageUrl}
						fill
						sizes="100%"
						alt=""
						aria-hidden="true"
						className="object-cover "
					/>
				</div>
				{/* Maybe switch whitespace-nowrap to line-clamp */}
				<div className=" whitespace-nowrap pb-1">
					<div
						className="absolute top-0 text-[11px] bg-darkBlue/75
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-b-md
				"
					>
						<div className="w-[11px] h-[11px] relative shrink-0 mb-[1px]">
							<Image
								src={starIcon}
								fill
								sizes="100%"
								alt=""
								aria-hidden="true"
							/>
						</div>
						{score}
					</div>
					<div
						className="absolute top-0 right-0 text-[11px] bg-lighterBlue 
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-bl-md"
					>
						<div className="h-[10px] w-[10px] relative">
							<Image
								src={calendarIcon}
								fill
								sizes="100%"
								alt=""
								aria-hidden="true"
								className="h-auto"
							/>
						</div>{" "}
						{year}
					</div>
					<h2 className="text-base font-medium ">{title}</h2>
					<p className="text-sm opacity-60">{titleJapanese}</p>
				</div>
			</article>
		</Link>
	);
}
