import InlineLinks from "../../../inlineLinks";
import ReadMoreButton from "../../../../readMoreButton";
import { useState } from "react";
import { RelationsEntity } from "../../../../../constants/interfacesAndTypes";
export default function RelatedAnime({
	relationsWithoutManga,
}: {
	relationsWithoutManga: RelationsEntity[];
}) {
	const [readMore, setReadMore] = useState<boolean>(false);
	return (
		<>
			<article className="hidden xl:block mt-6">
				<h3 className="font-bold">Related Anime</h3>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />

				<table>
					<tbody className="">
						{relationsWithoutManga.map((relation, i) => (
							<tr
								key={i}
								className="text-[12px] border-b-[1px] leading-7 
          dark:border-coolBlack"
							>
								<td className="whitespace-pre text-right align-top">
									{relation.relation}:{" "}
								</td>
								<td>
									{relation.entry && (
										<InlineLinks
											array={relation.entry}
											samePage={true}
										/>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</article>
			<article className="xl:hidden mt-6">
				<ReadMoreButton
					readMore={readMore}
					setReadMore={setReadMore}
					name="Related Anime"
				/>
				<hr className="border-black/20 my-1 dark:border-coolBlack" />
				<article
					className={`transition-all duration-500 ${
						readMore ? "max-h-[2300px]" : "max-h-0"
					} overflow-hidden`}
				>
					<table>
						<tbody className="">
							{relationsWithoutManga.map((relation, i) => (
								<tr
									key={i}
									className="text-[12px] border-b-[1px] leading-7 
          dark:border-coolBlack"
								>
									<td className="whitespace-pre text-right align-top">
										{relation.relation}:{" "}
									</td>
									<td>
										{relation.entry && (
											<InlineLinks
												array={relation.entry}
												samePage={true}
											/>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</article>
			</article>
		</>
	);
}
