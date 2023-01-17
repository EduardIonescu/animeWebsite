import Review from "./review";
export default function SectionReviews({ reviews }) {
	if (reviews)
		return (
			<section className="mt-6">
				<h3 className="font-bold">Reviews</h3>
				<hr className="border-black/20 my-1" />
				{reviews.length >= 1 ? (
					<section>
						{reviews.slice(0, 3).map((review, i) => (
							<Review key={i} review={review} />
						))}
					</section>
				) : (
					<section className="text-xs">
						No reviews have been submitted for this title.
					</section>
				)}
			</section>
		);
}
