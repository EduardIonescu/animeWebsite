import InlineLinks from "../../inlineLinks";
import TrailerModal from "./trailerModal";
import Image from "next/image";
import Synopsis from "./topInfo/synopsis";
import RelatedAnime from "./topInfo/relatedAnime";
import starIcon from "../../../../public/icons/star-icon.svg";
export default function SectionTop({ animeData }) {
	const {
		score,
		scored_by,
		rank,
		popularity,
		members,
		synopsis,
		background,
		relations,
		trailer,
		images,
		type,
		aired,
		studios,
	} = animeData;

	const relationsWithoutManga = relations.filter(
		(relation) =>
			relation.entry.filter((entry) => entry.type != "manga").length >= 1
	);
	return (
		<section className="order-0">
			<article
				className="flex xl:hidden gap-2 text-xs text-darkBlue 
			dark:text-darkGray"
			>
				<div className="relative w-28 h-40 shrink-0 rounded overflow-hidden">
					<Image
						src={images.jpg.image_url}
						fill
						sizes="100%"
						alt=""
						aria-hidden="true"
						className="object-cover"
					/>
				</div>
				<div className="">
					<div className="  flex items-center gap-1">
						<div className="relative w-4 h-4">
							<Image
								src={starIcon}
								fill
								sizes="100%"
								alt=""
								aria-hidden="true"
							/>
						</div>
						<p>
							<span
								className="text-darkBlue dark:text-veryLightGray 
							text-lg font-medium"
							>
								{score || "None"}
							</span>{" "}
							(
							{(scored_by && scored_by.toLocaleString("en")) || 0}{" "}
							users)
						</p>
					</div>
					<p className="text-sm text-darkBlue dark:text-veryLightGray">
						Ranked #{rank || "None"}
					</p>
					<p
						className="text-base mt-4 mb-1 text-darkBlue 
					dark:text-veryLightGray"
					>
						{type}
					</p>
					<p>Aired</p>
					<p className="text-darkBlue dark:text-veryLightGray">
						{aired && aired.string}
					</p>
					<p>Studios</p>
					{studios && studios.length >= 1 ? (
						<p className="text-sm">
							<InlineLinks array={studios} />
						</p>
					) : (
						<p>None</p>
					)}
				</div>
			</article>
			<article className="hidden xl:flex gap-4 mt-2">
				<div
					className="bg-blue-200/40 py-4 px-2 flex items-center border-[1px]
    shadow w-full rounded dark:bg-coolBlack/80 dark:border-coolBlack"
				>
					<div
						className="flex flex-col items-center border-r-[1px] border-black/20
      pr-6"
					>
						<p
							className="bg-blue-900 text-shadowLightBlue uppercase text-[10px]
          w-full text-center
        "
						>
							score
						</p>
						<h2 className="text-[32px] leading-[32px] font-bold pt-1">
							{score || "None"}
						</h2>
						<p className="text-[11px]">
							{scored_by ? scored_by.toLocaleString("en") : "0"}{" "}
							users
						</p>
					</div>
					<div className="flex gap-6 pl-4 text-xl font-medium">
						<h3>
							Ranked <span className="font-bold">#{rank}</span>
						</h3>
						<h3>
							Popularity{" "}
							<span className="font-bold">#{popularity}</span>
						</h3>
						<h3>
							Members{" "}
							<span className="font-bold">
								{members ? members.toLocaleString("en") : "0"}
							</span>
						</h3>
					</div>
				</div>
				{trailer.images.medium_image_url && (
					<>
						<TrailerModal
							key={`trailer-${animeData.mal_id}`}
							imageSrc={trailer.images.medium_image_url}
							youtubeId={trailer.youtube_id}
						/>
					</>
				)}
			</article>
			<Synopsis synopsis={synopsis} background={background} />
			{relations && relations.length >= 1 && (
				<RelatedAnime relationsWithoutManga={relationsWithoutManga} />
			)}
		</section>
	);
}
