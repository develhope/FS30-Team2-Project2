const viaggiLista = [
  // Europa
  {
    id: 1,
    title: "Viaggio romantico a Venezia",
    description: "Scopri i canali e il fascino romantico della Serenissima.",
    continent: "Europa",
    titleEng: "Romantic Trip to Venice",
  },
  {
    id: 2,
    title: "Avventura nelle Dolomiti",
    description: "Escursioni mozzafiato tra le montagne più belle d'Italia.",
    continent: "Europa",
    titleEng: "Adventure in the Dolomites",
  },

  // Asia
  {
    id: 3,
    title: "Scoperta dei templi di Kyoto",
    description: "Un viaggio nel cuore della tradizione giapponese.",
    continent: "Asia",
    titleEng: "Discovering Kyoto's Temples",
  },
  {
    id: 4,
    title: "Safari nel deserto di Dubai",
    description: "Vivi l'emozione delle dune e del lusso arabo.",
    continent: "Asia",
    titleEng: "Desert Safari in Dubai",
  },

  // Africa
  {
    id: 5,
    title: "Safari nel Serengeti",
    description: "Osserva la grande migrazione e la fauna africana.",
    continent: "Africa",
    titleEng: "Safari in the Serengeti",
  },
  {
    id: 6,
    title: "Escursione alle Cascate Vittoria",
    description: "Ammira una delle meraviglie naturali del mondo.",
    continent: "Africa",
    titleEng: "Trip to Victoria Falls",
  },

  // Nord America
  {
    id: 7,
    title: "Viaggio on the road sulla Route 66",
    description: "Attraversa gli Stati Uniti in un'esperienza unica.",
    continent: "Nord America",
    titleEng: "Road Trip on Route 66",
  },
  {
    id: 8,
    title: "Esplora le meraviglie del Grand Canyon",
    description: "Un paesaggio mozzafiato nel cuore dell'Arizona.",
    continent: "Nord America",
    titleEng: "Explore the Wonders of the Grand Canyon",
  },

  // Sud America
  {
    id: 9,
    title: "Avventura in Amazzonia",
    description: "Scopri la biodiversità della più grande foresta pluviale.",
    continent: "Sud America",
    titleEng: "Adventure in the Amazon",
  },
  {
    id: 10,
    title: "Visita a Machu Picchu",
    description: "Scopri l'antica città Inca sulle Ande peruviane.",
    continent: "Sud America",
    titleEng: "Visit to Machu Picchu",
  },

  // Oceania
  {
    id: 11,
    title: "Relax sulla Grande Barriera Corallina",
    description:
      "Esplora le acque cristalline e i coralli unici dell'Australia.",
    continent: "Oceania",
    titleEng: "Relax on the Great Barrier Reef",
  },
  {
    id: 12,
    title: "Scoperta della Nuova Zelanda",
    description: "Avventura tra i paesaggi di montagne, laghi e fiordi.",
    continent: "Oceania",
    titleEng: "Exploring New Zealand",
  },
];

const filterbyContinent = (continent) => {
  return viaggiLista.filter((trips) => trips.continent === continent);
};

export default filterbyContinent;
