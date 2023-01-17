import Review from "../animeInfoSection/reviews/review";
export default function AnimeReviewsSection({ reviews }) {
	return (
		<section>
			{reviews.map((review) => (
				<Review key={review.mal_id} review={review} />
			))}
		</section>
	);
}
