export default function AlternativeTitles({ animeData }) {
	const titleJapanese = animeData.title_japanese,
		titleSynonyms = animeData.title_synonyms.join(", ");

	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold">Alternative Titles</h3>
			<hr className="w-full relative border-black/20" />
			<ul className="text-[12px] font-light pt-1">
				{titleSynonyms && (
					<li>
						<span className="font-medium">Synonyms:</span>{" "}
						{titleSynonyms}
					</li>
				)}
				<li>
					<span className="font-medium">Japanese:</span>{" "}
					{titleJapanese}
				</li>
			</ul>
		</article>
	);
}
