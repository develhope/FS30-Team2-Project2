import { ReviewsList } from "../assets/ReviewsList";
import Review from "../components/Review";
import { useLanguage } from "../context/LanguageContext";
import "../components/Reviews.css";
import { Animation } from "../components/Animation";
import { useEffect, useState } from "react";

export function Reviews1() {
  const { language } = useLanguage();
  const [event, setEvent] = useState(ReviewsList);
  const [leftShift, setleftShift] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setleftShift((prevleftShift) => prevleftShift - 0.5);
      console.log(leftShift);
    }, 5);
  }, []);

  function left() {
    setEvent((prev) => [...prev.slice(-3), ...prev.slice(0, -3)]);
  }

  function right() {
    setEvent((prev) => [...prev.slice(3), ...prev.slice(0, 3)]);
  }

  return (
    <div>
      {/* <Animation textIt={"Recensioni"} textEng={"Reviews"} /> */}
      <div className="reviewCardsContainerWrapper">
        <div
          className="reviewCardsContainer"
          style={{ left: leftShift + "px" }}
        >
          {event.map((review) => (
            <Review
              key={review.id}
              stars={review.starNumber}
              review={language === "it" ? review.reviewIt : review.reviewEng}
              title={language === "it" ? review.titleIt : review.titleEng}
              date={review.date}
              name={review.name}
              image={review.image}
              imageClass="reviewImage"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
