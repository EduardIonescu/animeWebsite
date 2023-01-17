import RecommendationArticle from "./recommendationArticle";

export default function AnimeRecommendationsSection({ recommendations }) {
	return (
		<section className="mt-2 flex flex-wrap gap-3">
			{console.log(recommendations)}
			{recommendations.map((recommendation, i) => (
				<RecommendationArticle
					key={i}
					index={i}
					recommendation={recommendation}
				/>
			))}
		</section>
	);
}
