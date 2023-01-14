import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getData from "../../hooks/getData";
import Image from "next/image";
export default function Anime() {
	const [animeData, setAnimeData] = useState(false);
	const animeId = useRouter().query.id;
	const titleEnglish = animeData && animeData.title_english,
		title = animeData && animeData.title,
		titleJapanese = animeData && animeData.title_japanese,
		titleSynonyms = animeData && animeData.title_synonyms.join(", "),
		imageSrc = animeData && animeData.images.jpg.large_image_url;

	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(
				`https://api.jikan.moe/v4/anime/${animeId}/full`
			);

			if (!ignore) {
				setAnimeData(data.data);
			}
		}

		if (animeId) {
			startFetching();
		}
		return () => {
			ignore = true;
		};
	}, [animeId]);
	return (
		<main
			className="w-[75rem] h-[100%] mx-auto pb-4 bg-shadowLightBlue
  text-shadowDarkBlue flex flex-wrap"
		>
			<nav
				className="w-full  bg-[#B0C4DE] px-4 py-2 shadow-sm relative mb-4
       shadow-blue-400/50 border-b-[1px] border-shadowDarkBlue/50"
			>
				<h1 className="font-bold text-lg">{titleEnglish}</h1>
				<h2 className="opacity-70 text-base">{title}</h2>
			</nav>
			<aside className="w-[25%]  px-4">
				<Image
					src={imageSrc}
					width={268}
					height={400}
					alt={`${title}'s Image`}
					className="pb-4"
				/>
				<article>
					<h3 className="">Alternative Titles</h3>
					<hr className="w-full relative border-black/20" />
					{titleSynonyms && <p>Synonyms: {titleSynonyms}</p>}
					<p>Japanese: {titleJapanese}</p>
				</article>
				<article className="pt-6">
					<h3>Information</h3>
					<hr className="w-full relative border-black/20" />
					<p>Type: {animeData.type}</p>
					<p>Episodes: {animeData.episodes}</p>
					<p>Status: {animeData.status}</p>
				</article>
			</aside>
			<section className="w-[75%]"></section>
			{animeData && console.log(animeData)}
		</main>
	);
}
