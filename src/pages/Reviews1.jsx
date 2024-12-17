import { useEffect, useState } from "react";
import { ReviewsList } from "../assets/ReviewsList";
import Review from "../components/Review";
import "../components/Reviews.css";
import { useLanguage } from "../context/LanguageContext";

export function Reviews1() {
  const { language } = useLanguage();
  const [leftShift, setLeftShift] = useState(0);

  const cardWidth = 320;
  const scrollSpeed = 0.5;
  const resetThreshold = -(cardWidth * ReviewsList.length);

  const combinedReviews = [...ReviewsList, ...ReviewsList];

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftShift((prevLeftShift) => {
        const nextShift = prevLeftShift - scrollSpeed;
        if (nextShift <= resetThreshold) {
          return 0;
        }
        return nextShift;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [resetThreshold]);

  return (
    <div className="reviewCardsContainerWrapper">
      <div
        className="reviewCardsContainer"
        style={{
          transform: `translateX(${leftShift}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {combinedReviews.map((review, index) => (
          <Review
            key={index}
            stars={review.starNumber}
            review={language === "it" ? review.reviewIt : review.reviewEng}
            title={language === "it" ? review.titleIt : review.titleEng}
            date={review.date}
            name={review.reviewerName}
            image={review.image}
            imageClass="reviewImage"
          />
        ))}
      </div>
    </div>
  );
}
