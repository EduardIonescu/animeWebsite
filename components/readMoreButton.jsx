import Image from "next/image";
export default function ReadMoreButton({ readMore, setReadMore }) {
	function toggleReadMore() {
		setReadMore((rm) => !rm);
	}
	return (
		<button
			onClick={toggleReadMore}
			type="button"
			className="pt-[2px] opacity-75 hover:text-lighterBlue
transition duration-300"
		>
			<div className="w-3 h-3 relative inline-block mr-[1px]">
				<Image
					src="/icons/angle-down-icon.svg"
					fill
					sizes="100%"
					alt=""
					aria-hidden="true"
					className={`transition duration-200 mt-[1px] dark:invert  ${
						readMore ? "rotate-180" : ""
					}`}
				/>
			</div>{" "}
			{readMore ? "Show less" : "Read more"}
		</button>
	);
}
