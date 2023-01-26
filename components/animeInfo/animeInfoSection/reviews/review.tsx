import Image from "next/image";
import { useState } from "react";
import { IReviews } from "../../../../constants/sectionInterfaces/IReviews";
import ReadMoreButton from "../../../readMoreButton";
export default function Review({ review }: { review: IReviews }) {
	const [readMore, setReadMore] = useState(false);

	const date = new Date(review.date).toLocaleDateString("en-UK", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<article
			className="flex py-4 border-b-[1px] border-black/10 items-start
			dark:border-coolBlack/80"
		>
			<div className="relative h-16 w-[44px] shrink-0">
				<Image
					src={review.user.images.webp.image_url}
					fill
					sizes="100%"
					alt=""
					aria-hidden="true"
					className="object-contain"
				/>
			</div>
			<div className="text-[12px] ml-2 relative">
				<h4>{review.user.username}</h4>
				<p className="absolute right-0 top-0 text-[12px] opacity-60">
					{date}
				</p>
				{review.tags && (
					<button
						type="button"
						className={`px-2 py-[2px] rounded-sm shadow-md font-bold my-2
      ${
			review.tags[0] == "Recommended"
				? "bg-green-100 text-green-800"
				: review.tags[0] == "Mixed Feelings"
				? "bg-black/10"
				: "bg-red-100 text-darkRed"
		}`}
					>
						{review.tags[0]}
					</button>
				)}

				<p
					className={`whitespace-pre-wrap leading-[1.5em] 
    ${readMore ? "" : "line-clamp-4"} `}
				>
					{review.review}
				</p>
				{readMore && (
					<p className="my-4">
						Reviewer&apos;s Rating: <strong>{review.score}</strong>
					</p>
				)}
				<div className="flex px-3 mt-2 items-center gap-16">
					<div className="flex items-center gap-2 ">
						<div className="relative w-[18px] h-[18px]">
							<Image
								src="/icons/thumbs-icon.svg"
								fill
								sizes="100%"
								alt="Likes"
								className="cursor-pointer object-cover"
							/>
						</div>
						<p className="opacity-60 pt-[2px]">
							{review.reactions.overall}
						</p>
					</div>
					<ReadMoreButton
						readMore={readMore}
						setReadMore={setReadMore}
					/>
				</div>
			</div>
		</article>
	);
}
