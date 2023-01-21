import { useState } from "react";
import ReadMoreButton from "../../../../readMoreButton";
export default function Synopsis({ synopsis, background }) {
	const [readMore, setReadMore] = useState(false);
	return (
		<>
			<article className="hidden xl:block mt-6">
				<h3 className="font-bold">Synopsis</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<p className="text-[12px] whitespace-pre-wrap">
					{synopsis || "This title has no synopsis."}
				</p>
			</article>
			<article className="hidden xl:block mt-6">
				<h3 className="font-bold">Background</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<p className="text-[12px] whitespace-pre-wrap">
					{background || "This title has no background information."}
				</p>
			</article>
			<article
				className={`xl:hidden relative mt-6 ${
					!readMore && "line-clamp-4 "
				}`}
			>
				<h3 className="font-bold">Synopsis</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<p className="text-sm whitespace-pre-wrap">
					{synopsis || "This title has no synopsis."}
				</p>

				<h3 className="font-bold mt-6">Background</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<p className="text-sm whitespace-pre-wrap">
					{background || "This title has no background information."}
				</p>
				{!readMore && (synopsis || background) && (
					<div
						className="absolute bottom-0 w-full z-10  h-8 bg-gradient-to-t 
						from-shadowLightBlue dark:from-veryDarkBlue to-transparent"
					></div>
				)}
			</article>
			{(synopsis || background) && (
				<div className="w-full block text-right xl:hidden pr-1">
					<ReadMoreButton
						readMore={readMore}
						setReadMore={setReadMore}
					/>
				</div>
			)}
		</>
	);
}
