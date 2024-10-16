import { IReviews } from "../../../constants/sectionInterfaces/reviewsInterface";
import Review from "../animeInfoSection/reviews/review";
export default function AnimeReviewsSection({
  reviews,
}: {
  reviews: IReviews[];
}) {
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
