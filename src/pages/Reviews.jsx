import { ReviewsList } from "../assets/ReviewsList";
import { WoodBar } from "../components/WoodBar";
import Review from "../components/Review";
import { useLanguage } from "../context/LanguageContext";
import "../components/Reviews.css";

export function Reviews() {
  const { language } = useLanguage();
  const list = ReviewsList;
  return (
    <div>
      <div className="reviewCardsContainer">
        {list.map((event) => (
          <div className="reviewCards" key={event.id}>
            <Review
              stars={event.starNumber}
              review={language === "it" ? event.reviewIt : event.reviewEng}
              title={language === "it" ? event.titleIt : event.titleEng}
              date={event.date}
            />
          </div>
        ))}
      </div>
      <WoodBar />
    </div>
  );
}
