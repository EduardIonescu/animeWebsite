import { useState } from "react";
import { IsAnimeData } from "../../../constants/interfacesAndTypes";
import ReadMoreButton from "../../readMoreButton";
export default function AlternativeTitles({
  animeData,
}: {
  animeData: IsAnimeData;
}) {
  const [readMore, setReadMore] = useState(false);
  const titleJapanese = animeData.title_japanese,
    titleSynonyms = animeData.title_synonyms?.join(", ");

  if (titleJapanese || titleSynonyms)
    return (
      <article className="pt-6">
        <h3 className="pb-1 font-bold hidden xl:block">Alternative Titles</h3>
        <div className="xl:hidden">
          <ReadMoreButton
            readMore={readMore}
            setReadMore={setReadMore}
            name="Alternative Titles"
          />
        </div>
        <hr className="w-full border-black/20" />
        <ul className="text-[12px] font-light pt-1 hidden xl:block">
          {titleSynonyms && (
            <li>
              <span className="font-medium">Synonyms:</span> {titleSynonyms}
            </li>
          )}
          {titleJapanese && (
            <li>
              <span className="font-medium">Japanese:</span> {titleJapanese}
            </li>
          )}
        </ul>
        <ul
          className={`text-[12px] font-light pt-1 xl:hidden transition-[max-height]
					 duration-300 ${readMore ? "max-h-20" : "max-h-0"} overflow-hidden`}
        >
          {titleSynonyms && (
            <li>
              <span className="font-medium">Synonyms:</span> {titleSynonyms}
            </li>
          )}
          {titleJapanese && (
            <li>
              <span className="font-medium">Japanese:</span> {titleJapanese}
            </li>
          )}
        </ul>
      </article>
    );
  else return <></>;
}
