import Card from "./Card";
import "./Card.css";

const cardContent = [
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/festival-luci-amsterdam-olanda-hd.jpg",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/gettyimages-460767505-612x612.jpg",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/2024021416353982631.jpg",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/Dichiarazione-di-Indipendenza-Americana-840x560.webp",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/4c1ed5d58db53d404bed6db60f8b81e7.jpg",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/carnevale-di-rio.jpg",
  },
  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/Messico-cop-scaled-1.jpg",
  },

  {
    title: "titolo della card",
    content: "questo è un contenutuo della card",
    image: "./img/Holi-Festival2-600x391.jpg",
  },
];

export default function Cards() {
  return (
    <div className="cards-container">
      {cardContent.map((item) => (
        <Card title={item.title} content={item.content} image={item.image} />
      ))}
    </div>
  );
}
