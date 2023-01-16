import Image from "next/image";
import { useState } from "react";
export default function Review({ review }) {
	const [readMore, setReadMore] = useState(false);

	const date = new Date(review.date).toLocaleDateString("en-UK", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	function toggleReadMore() {
		setReadMore(!readMore);
	}
	return (
		<article
			className="flex py-4 border-b-[1px] border-black/10 items-start
  "
		>
			<Image
				src={review.user.images.jpg.image_url}
				width={44}
				height={64}
				alt=""
				aria-hidden="true"
				className="object-contain"
			/>
			<div className="text-[12px] ml-2 relative">
				<h4>{review.user.username}</h4>
				<p className="absolute right-0 top-0 text-[12px] opacity-60">
					{date}
				</p>
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
				<p
					className={`whitespace-pre-wrap leading-[1.5em] 
    ${readMore ? "" : "line-clamp-4"}`}
				>
					{review.review}
				</p>
				{readMore && (
					<p className="my-4">
						Reviewer's Rating: <strong>{review.score}</strong>
					</p>
				)}
				<div className="flex px-3 mt-2 items-center gap-16">
					<div className="flex items-center gap-2 ">
						<Image
							src="/icons/thumbs-icon.svg"
							width={20}
							height={20}
							alt="Likes"
							className="cursor-pointer"
						/>
						<p className="opacity-60 pt-[2px]">
							{review.reactions.overall}
						</p>
					</div>
					<button
						onClick={toggleReadMore}
						type="button"
						className="pt-[2px] opacity-75 hover:text-lighterBlue
        transition duration-300"
					>
						<Image
							src="/icons/angle-down-icon.svg"
							width={12}
							height={12}
							alt=""
							aria-hidden="true"
							className={`inline mr-[2px] transition duration-200 ${
								readMore ? "rotate-180" : ""
							}`}
						/>{" "}
						{readMore ? "Show less" : "Read more"}
					</button>
				</div>
			</div>
		</article>
	);
}
