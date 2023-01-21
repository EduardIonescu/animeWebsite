import { useRouter } from "next/router";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { LoadingSpinner } from "../../other/loading";
import { sendToPage } from "../../../lib/searchRedirect";
export default function SearchBarResults({
	resultsData,
	setSearchIsActive,
	searchRef,
}) {
	const resultsRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		function handleClickOutside(e) {
			if (
				resultsRef.current &&
				!resultsRef.current.contains(e.target) &&
				!searchRef.current.contains(e.target)
			)
				setSearchIsActive(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [resultsRef, searchRef, setSearchIsActive]);

	return (
		<div
			onClick={() => setSearchIsActive(false)}
			className="absolute z-20 text-darkBlue bg-transparent dark:text-veryLightGray
			px-4 w-full top-12 xl:top-10 "
			ref={resultsRef}
		>
			{resultsData ? (
				<ul className="bg-white dark:bg-darkBlueDark overflow-hidden rounded">
					{resultsData.map((result, i) => (
						<li
							key={result.id}
							onClick={() => sendToPage(router, result.title)}
							className=" mb-1 cursor-pointer group flex items-center gap-2
							bg-black/0 hover:bg-black/5 transition duration-200"
						>
							<div
								className="relative w-12 h-12 transition-all duration-200 
							shrink-0 group-hover:h-24"
							>
								<Image
									className="object-cover "
									src={result.image}
									fill
									sizes="100%"
									alt=""
									aria-hidden="true"
								/>
							</div>
							<div
								className="py-1 text-[10px] whitespace-pre 
								group-hover:whitespace-normal"
							>
								<p className="text-lighterBlue text-[11px]">
									{result.title}
								</p>
								<p className="group-hover:hidden">
									({result.type}, {result.releaseDate})
								</p>
								<p className="hidden group-hover:block opacity-50">
									Aired: {result.releaseDate}
								</p>
								<p className="hidden group-hover:block opacity-50">
									Score: {result.rating}
								</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<div className="bg-white overflow-hidden rounded py-8">
					<LoadingSpinner />
				</div>
			)}
		</div>
	);
}
