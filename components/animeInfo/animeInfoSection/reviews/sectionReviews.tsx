import { useState } from "react";
import { IReviews } from "../../../../constants/sectionInterfaces/reviewsInterface";
import ReadMoreButton from "../../../readMoreButton";
import Review from "./review";

export default function SectionReviews({ reviews }: { reviews: IReviews[] }) {
  const [readMore, setReadMore] = useState<boolean>(true);
  if (reviews)
    return (
      <>
        <section className="mt-6 order-2">
          <div className="xl:hidden">
            <ReadMoreButton
              readMore={readMore}
              setReadMore={setReadMore}
              name="Reviews"
            />
          </div>
          <h3 className="font-bold hidden xl:block">Reviews</h3>
          <hr className="border-black/20 my-1 dark:border-coolBlack" />
          {reviews.length >= 1 ? (
            <section
              className={`transition-all duration-700 xl:transition-none ${
                readMore ? "max-h-[7500px]" : "max-h-0"
              } overflow-hidden`}
            >
              {reviews.slice(0, 3).map((review, i) => (
                <Review key={i} review={review} />
              ))}
            </section>
          ) : (
            <section
              className={`text-xs transition-all duration-500 
						xl:transition-none ${readMore ? "max-h-8" : "max-h-0"} 
						overflow-hidden`}
            >
              No reviews have been submitted for this title.
            </section>
          )}
        </section>
      </>
    );
}
