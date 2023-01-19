import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
export default function SearchBarResults({
	resultsData,
	setSearchIsActive,
	searchRef,
}) {
	const resultsRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(e) {
			console.log(e.target);
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
	}, [resultsRef]);
	return (
		<div
			onClick={() => setSearchIsActive(false)}
			className="absolute z-20 text-darkBlue bg-transparent px-4 w-full 
		top-10 "
			ref={resultsRef}
		>
			{console.log("resultsData", resultsData)}
			{resultsData ? (
				<ul className="bg-white overflow-hidden rounded">
					{resultsData.map((result, i) => (
						<li key={i} className=" mb-1 cursor-pointer group">
							<Link
								href={`/anime/${result.mal_id}`}
								className="flex items-center gap-2"
							>
								<div className="relative w-12 h-14 shrink-0 group-hover:h-20">
									<Image
										className="object-cover"
										src={result.images.jpg.image_url}
										fill
										sizes="100%"
										alt=""
										aria-hidden="true"
									/>
								</div>
								<div className="py-1 text-[10px] ">
									<p className="text-lighterBlue text-[11px]">
										{result.title}
									</p>
									<p className="group-hover:hidden">
										({result.type},{" "}
										{result.aired.prop.from.year})
									</p>
									<p className="hidden group-hover:block opacity-50">
										Aired: {result.aired.string}
									</p>
									<p className="hidden group-hover:block opacity-50">
										Score: {result.score}
									</p>
									<p className="hidden group-hover:block opacity-50">
										Status:{" "}
										{result.airing
											? "Finished Airing"
											: "Ongoing"}
									</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}
