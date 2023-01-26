import { IRecommendations } from "../../../constants/sectionInterfaces/IRecommendations";
import RecommendationArticle from "./recommendationArticle";

export default function AnimeRecommendationsSection({
	recommendations,
}: {
	recommendations: IRecommendations[];
}) {
	return (
		<section className="mt-2 flex flex-wrap gap-3">
			{recommendations && recommendations.length >= 1 ? (
				<>
					{recommendations.map((recommendation, i) => (
						<RecommendationArticle
							key={i}
							recommendation={recommendation}
						/>
					))}
				</>
			) : (
				<p className="mt-2 text-sm">
					No recommendations have been made for this title.
				</p>
			)}
		</section>
	);
}
