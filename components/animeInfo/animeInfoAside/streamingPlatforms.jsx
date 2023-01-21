import ReadMoreButton from "../../readMoreButton";
import { useState } from "react";
export default function StreamingPlatforms({ streaming }) {
	const [readMore, setReadMore] = useState(false);
	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold hidden xl:block">
				Streaming Platforms
			</h3>
			<div className="xl:hidden">
				<ReadMoreButton
					readMore={readMore}
					setReadMore={setReadMore}
					name="Streaming Platforms"
				/>
			</div>
			<hr className="w-full relative border-black/20" />
			<ul
				className={`text-[12px] font-light pt-1 xl:hidden transition-[max-height]
			duration-500 ${readMore ? "max-h-[200px]" : "max-h-0"} overflow-hidden`}
			>
				{streaming.map((platform, i) => (
					<li key={i}>
						<a
							href={platform.url}
							target="_blank"
							className="text-lighterBlue transition duration-300 
      hover:opacity-80"
						>
							{platform.name}
						</a>
					</li>
				))}
			</ul>
			<ul className="text-[12px] font-light pt-1 hidden xl:block">
				{streaming.map((platform, i) => (
					<li key={i}>
						<a
							href={platform.url}
							target="_blank"
							className="text-lighterBlue transition duration-300 
      hover:opacity-80"
						>
							{platform.name}
						</a>
					</li>
				))}
			</ul>
		</article>
	);
}
