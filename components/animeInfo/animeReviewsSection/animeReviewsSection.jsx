import Review from "../animeInfoSection/reviews/review";
export default function AnimeReviewsSection({ reviews }) {
	return (
		<section>
			{reviews && reviews.length >= 1 ? (
				<>
					{reviews.map((review) => (
						<Review key={review.mal_id} review={review} />
					))}{" "}
				</>
			) : (
				<p className="mt-4 text-sm">
					No reviews have been submitted for this title.
				</p>
			)}
		</section>
	);
}
