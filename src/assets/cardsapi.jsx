const Cardsapi = [
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/p/AF1QipN4dDZ1memj4i6sa-o46QBBUqa6QvtktgJJuDGS=s680-w680-h510",
    titleIt: "Festival della Musica",
    contentIt:
      "Un weekend di musica dal vivo con artisti internazionali e locali, cibo delizioso e un'atmosfera festosa.",
    titleEng: "Music Festival",
    contentEng:
      "A weekend of live music with international and local artists, delicious food, and a festive atmosphere.",
    date: "2024-12-10T10:00:00",
    price: 50, // Prezzo in Euro
    currency: "EUR", // Valuta
  },
  {
    id: 2,
    image:
      "https://www.visitvillach.at/media/animation/mobile/mittagskogel-wandern-faaker-see-region-villach-gmbh-stefan-leitner.jpg",
    titleIt: "Avventura in Montagna",
    contentIt:
      "Un'escursione tra le vette più alte, con paesaggi mozzafiato e la possibilità di avvistare fauna selvatica.",
    titleEng: "Mountain Adventure",
    contentEng:
      "A hike through the highest peaks, with breathtaking landscapes and the chance to spot wildlife.",
    date: "2024-12-12T08:00:00",
    price: 30,
    currency: "EUR",
  },
  {
    id: 3,
    image:
      "https://www.insidewine.it/wp-content/uploads/2018/03/eventi-vino-roma-e1537030099834.jpg",
    titleIt: "Fiera del Vino",
    contentIt:
      "Degustazioni di vini pregiati, workshop di sommelier e la possibilità di incontrare i produttori.",
    titleEng: "Wine Fair",
    contentEng:
      "Tasting of fine wines, sommelier workshops, and the opportunity to meet the producers.",
    date: "2024-12-15T17:00:00",
    price: 40,
    currency: "EUR",
  },
  {
    id: 4,
    image:
      "https://www.starbene.it/content/uploads/2022/10/firenze-turista.jpg",
    titleIt: "Tour Culturale in Città",
    contentIt:
      "Un viaggio attraverso la storia e l'arte, visitando musei, gallerie e monumenti iconici.",
    titleEng: "Cultural City Tour",
    contentEng:
      "A journey through history and art, visiting museums, galleries, and iconic monuments.",
    date: "2024-12-18T09:00:00",
    price: 60,
    currency: "EUR",
  },
  {
    id: 5,
    image:
      "https://www.ilpuntoamezzogiorno.it/wp-content/uploads/2024/04/5-maratona-2024-1140x641.jpg",
    titleIt: "Maratona di Primavera",
    contentIt:
      "Un evento sportivo che unisce corridori di tutte le età in una corsa attraverso parchi e vie della città.",
    titleEng: "Spring Marathon",
    contentEng:
      "A sporting event that brings together runners of all ages in a race through parks and city streets.",
    date: "2024-04-05T08:00:00",
    price: 25,
    currency: "EUR",
  },
  {
    id: 6,
    image:
      "https://www.crocierissime.it/uploads/cruiseline/184579/original_99kkkyjzkzkzzxw.jpg",
    titleIt: "Crociere nel Mediterraneo",
    contentIt:
      "Scopri le meraviglie delle isole e delle coste con un viaggio in crociera indimenticabile.",
    titleEng: "Mediterranean Cruises",
    contentEng:
      "Discover the wonders of the islands and coastlines with an unforgettable cruise trip.",
    date: "2024-07-20T12:00:00",
    price: 500,
    currency: "EUR",
  },
  {
    id: 7,
    image:
      "https://d1mnxluw9mpf9w.cloudfront.net/media/18648/Sustainability-Conference-Image.jpg",
    titleIt: "Conferenza sulla Sostenibilità",
    contentIt:
      "Un incontro internazionale per discutere le migliori pratiche e innovazioni per un futuro sostenibile.",
    titleEng: "Sustainability Conference",
    contentEng:
      "An international gathering to discuss best practices and innovations for a sustainable future.",
    date: "2024-09-10T09:30:00",
    price: 150,
    currency: "EUR",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/foto-premium/escursioni-per-l-esplorazione-della-giungla_955834-8023.jpg",
    titleIt: "Esplorazione della Giungla",
    contentIt:
      "Un'avventura in un ecosistema unico, con escursioni tra flora e fauna straordinarie.",
    titleEng: "Jungle Exploration",
    contentEng:
      "An adventure in a unique ecosystem, with excursions through extraordinary flora and fauna.",
    date: "2024-06-25T08:00:00",
    price: 200,
    currency: "EUR",
  },
  {
    id: 9,
    image:
      "https://www.caldana.it/files/blog/image/mercatini_natale_europa.jpg",
    titleIt: "Mercato di Natale",
    contentIt:
      "Un'incantevole atmosfera natalizia con bancarelle artigianali, cibo tradizionale e musica festiva.",
    titleEng: "Christmas Market",
    contentEng:
      "A charming Christmas atmosphere with craft stalls, traditional food, and festive music.",
    date: "2024-12-05T17:00:00",
    price: 10,
    currency: "EUR",
  },
  {
    id: 10,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/08/6b/d2/caption.jpg?w=1200&h=-1&s=1",
    titleIt: "Safari in Africa",
    contentIt:
      "Un'esperienza indimenticabile tra i grandi animali selvatici nei loro habitat naturali.",
    titleEng: "Safari in Africa",
    contentEng:
      "An unforgettable experience among the great wild animals in their natural habitats.",
    date: "2024-08-14T10:00:00",
    price: 800,
    currency: "EUR",
  },
  {
    id: 11,
    image:
      "https://www.romatoday.it/~media/horizontal-hi/60607421885720/casa-del-jazz-3.jpg",
    titleIt: "Concerto all'Aperto",
    contentIt:
      "Una serata di musica sotto le stelle, con band locali e cibo da street food.",
    titleEng: "Outdoor Concert",
    contentEng:
      "An evening of music under the stars, with local bands and street food.",
    date: "2024-07-15T19:00:00",
    price: 20,
    currency: "EUR",
  },
  {
    id: 12,
    image:
      "https://notizie.comuni-italiani.it/wp-content/uploads/2015/09/1-Bari-Fiera-del-Levante-2015-galleria-delle-nazioni.jpg",
    titleIt: "La Fiera del Levante",
    contentIt:
      "La Fiera del Levante: cultura, esposizioni, concerti e street food a Bari.",
    titleEng: "Outdoor Concert - Fiera del Levante",
    contentEng:
      "The Fiera del Levante: culture, exhibitions, concerts, and street food in Bari.",
    date: "2024-07-15T19:00:00",
    price: 20,
    currency: "EUR",
  },
];

export default Cardsapi;
