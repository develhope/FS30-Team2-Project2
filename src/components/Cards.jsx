import Card from "./Card";
import "./Card.css";
import { useEffect, useState } from "react";

const Cards = () => {
  const [countryList, setCountryList] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/countries/countries"
      );
      const data = await response.json();
      setCountryList(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="cards-container">
        {countryList.map((country) => (
          <div key={country.id}>
            <Card
              content={country.name}
              image={country.media.flag}
              title={country.capital}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
