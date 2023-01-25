import Image from "next/image";
export default function ReadMoreButton({
	readMore,
	setReadMore,
	name,
}: {
	readMore: boolean;
	setReadMore: Function;
	name: string;
}) {
	function toggleReadMore() {
		setReadMore((rm: boolean) => !rm);
	}
	return (
		<button
			onClick={toggleReadMore}
			type="button"
			className={`pt-[2px] 
transition duration-300 ${
				name
					? "text-base text-darkBlue dark:text-veryLightGray font-bold"
					: "hover:text-lighterBlue opacity-75"
			}`}
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
			{name ? name : readMore ? "Show less" : "Read more"}
		</button>
	);
}
