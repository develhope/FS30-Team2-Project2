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

  const maxLeft = 3000;

  useEffect(() => {
    setInterval(() => {
      setleftShift((prevleftShift) => {
        // la condizione non sarà mai vera dato che il numero massimo è un numero positivo,
        // con la sottrazione avrai sempre un numero negativo come risultato
        if (prevleftShift >= maxLeft) {
          return 0;
        }
        return prevleftShift - 0.5;
      });
    }, 5);
  }, []);

  console.log("leftShift", leftShift);

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
              name={review.reviewerName}
              image={review.image}
              imageClass="reviewImage"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
