/** @format */
import { useLanguage } from "../../context/LanguageContext";
import "./eventsArray.css";

export const eventi = [
  {
    titleIta: "Carnevale di Rio",
    titleEng: "Rio Carnival",
    contentIta:
      "Il Carnevale di Rio è una delle feste più famose al mondo, con sfilate spettacolari di samba, costumi colorati e una festa che coinvolge milioni di persone nelle strade di Rio de Janeiro, Brasile.",
    contentEng:
      "The Rio Carnival is one of the most famous festivals in the world, with spectacular samba parades, colorful costumes, and a celebration that involves millions of people in the streets of Rio de Janeiro, Brazil.",
    continente: "Sud America",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRk_qHC8NU1nZmsPkMzwqpOY7M89RsqTGKQ&s",
  },
  {
    titleIta: "Festa della Neve in Giappone",
    titleEng: "Snow Festival in Japan",
    contentIta:
      "Il Festival della Neve di Sapporo, in Giappone, è noto per le sue spettacolari sculture di neve e ghiaccio. Ogni anno attira milioni di visitatori per ammirare le opere d'arte e partecipare alle varie attività invernali.",
    contentEng:
      "The Sapporo Snow Festival in Japan is famous for its spectacular snow and ice sculptures. Every year, millions of visitors come to admire the artworks and participate in various winter activities.",
    continente: "Asia",
    imageUrl: "https://example.com/images/sapporo-snow-festival.jpg",
  },
  {
    titleIta: "Oktoberfest",
    titleEng: "Oktoberfest",
    contentIta:
      "L'Oktoberfest di Monaco di Baviera, in Germania, è il festival della birra più grande del mondo. Ogni anno, milioni di persone si riuniscono per assaporare birra tradizionale e cibi tipici in un' atmosfera festosa",
    contentEng:
      "The Oktoberfest in Munich, Germany, is the world's largest beer festival. Every year, millions of people gather to enjoy traditional beer and food in a festive atmosphere.",
    continente: "Europa",
    imageUrl: "https://example.com/images/oktoberfest.jpg",
  },
  {
    titleIta: "Capodanno Cinese",
    titleEng: "Chinese New Year",
    contentIta:
      "Il Capodanno Cinese è una delle festività più importanti in Asia, con celebrazioni che durano diversi giorni. Le strade si animano con parate, danze dei draghi, fuochi d'artificio e cibi tradizionali.",
    contentEng:
      "Chinese New Year is one of the most important holidays in Asia, with celebrations lasting several days. The streets come alive with parades, dragon dances, fireworks, and traditional foods.",
    continente: "Asia",
    imageUrl: "https://example.com/images/chinese-new-year.jpg",
  },
  {
    titleIta: "Festival dell'Acqua Songkran",
    titleEng: "Songkran Water Festival",
    contentIta:
      "Il Songkran è il festival del capodanno thailandese, celebrato con battaglie di acqua in tutto il paese. Le persone si spruzzano acqua l'una con l'altra come simbolo di purificazione e benedizione.",
    contentEng:
      "Songkran is the Thai New Year festival, celebrated with water fights throughout the country. People splash water on each other as a symbol of purification and blessing.",
    continente: "Asia",
    imageUrl: "https://example.com/images/songkran-festival.jpg",
  },
  {
    titleIta: "Day of the Dead",
    titleEng: "Day of the Dead",
    contentIta:
      "La festività messicana del Día de los Muertos celebra la vita dei defunti con altari decorati, cibo tradizionale, e danze. È un'occasione per onorare gli antenati e celebrare la morte come parte della vita.",
    contentEng:
      "The Mexican holiday Día de los Muertos celebrates the lives of the deceased with decorated altars, traditional food, and dances. It is an occasion to honor ancestors and celebrate death as part of life.",
    continente: "Nord America",
    imageUrl: "https://example.com/images/day-of-the-dead.jpg",
  },
  {
    titleIta: "Festival di Diwali",
    titleEng: "Diwali Festival",
    contentIta:
      "Diwali, conosciuto anche come il Festival delle luci, è una delle festività più importanti in India. Durante Diwali, le case vengono illuminate con luci, si scambiano regali, e si celebrano preghiere per la prosperità.",
    contentEng:
      "Diwali, also known as the Festival of Lights, is one of the most important holidays in India. During Diwali, homes are illuminated with lights, gifts are exchanged, and prayers are offered for prosperity.",
    continente: "Asia",
    imageUrl: "https://example.com/images/diwali-festival.jpg",
  },
  {
    titleIta: "Mardi Gras",
    titleEng: "Mardi Gras",
    contentIta:
      "Il Mardi Gras di New Orleans è una delle celebrazioni più famose degli Stati Uniti, con sfilate colorate, costumi elaborati, musica e feste che celebrano la cultura creola e afroamericana.",
    contentEng:
      "Mardi Gras in New Orleans is one of the most famous celebrations in the United States, with colorful parades, elaborate costumes, music, and parties celebrating Creole and African American culture.",
    continente: "Nord America",
    imageUrl: "https://example.com/images/mardi-gras.jpg",
  },
  {
    titleIta: "Vivid Sydney",
    titleEng: "Vivid Sydney",
    contentIta:
      "Vivid Sydney è un festival di luci, musica e idee che si svolge ogni anno a Sydney, in Australia, trasformando la città in un'opera d'arte visiva con installazioni di luce e spettacoli dal vivo.",
    contentEng:
      "Vivid Sydney is a festival of lights, music, and ideas held annually in Sydney, Australia, transforming the city into a visual artwork with light installations and live performances.",
    continente: "Oceania",
    imageUrl: "https://example.com/images/vivid-sydney.jpg",
  },
  {
    titleIta: "San Fermín",
    titleEng: "San Fermín Festival",
    contentIta:
      "La Feria di San Fermín a Pamplona, in Spagna, è famosa per la corsa dei tori, una tradizione che attira migliaia di turisti ogni anno, oltre a eventi religiosi, parate e danze popolari.",
    contentEng:
      "The San Fermín Festival in Pamplona, Spain, is famous for the Running of the Bulls, a tradition that attracts thousands of tourists every year, along with religious events, parades, and folk dances.",
    continente: "Europa",
    imageUrl: "https://example.com/images/san-fermin.jpg",
  },
  {
    titleIta: "Festival di Glastonbury",
    titleEng: "Glastonbury Festival",
    contentIta:
      "Il Festival di Glastonbury nel Regno Unito è uno dei festival musicali più grandi e famosi al mondo, dove si esibiscono artisti di fama mondiale e si celebrano anche arti visive e spettacoli teatrali.",
    contentEng:
      "The Glastonbury Festival in the UK is one of the largest and most famous music festivals in the world, where world-renowned artists perform and visual arts and theater shows are also celebrated.",
    continente: "Europa",
    imageUrl: "https://example.com/images/glastonbury-festival.jpg",
  },
  {
    titleIta: "Carnaval de Barranquilla",
    titleEng: "Barranquilla Carnival",
    contentIta:
      "Il Carnevale di Barranquilla in Colombia è uno dei più grandi e importanti carnevali del paese, con parate, danze e tradizioni culturali che celebrano la diversità e la ricchezza della cultura colombiana.",
    contentEng:
      "The Barranquilla Carnival in Colombia is one of the largest and most important carnivals in the country, with parades, dances, and cultural traditions that celebrate the diversity and richness of Colombian culture.",
    continente: "Sud America",
    imageUrl: "https://example.com/images/barranquilla-carnival.jpg",
  },
  {
    titleIta: "Carnival di Salvador",
    titleEng: "Salvador Carnival",
    contentIta:
      "Il Carnevale di Salvador, in Brasile, è uno dei più grandi del mondo, con parate, blocchi di strada, danze di samba e molta musica che rispecchia la cultura afro-brasiliana.",
    contentEng:
      "The Salvador Carnival in Brazil is one of the largest in the world, with parades, street blocks, samba dances, and lots of music reflecting Afro-Brazilian culture.",
    continente: "Sud America",
    imageUrl: "https://example.com/images/salvador-carnival.jpg",
  },
  {
    titleIta: "Holika Dahan",
    titleEng: "Holika Dahan",
    contentIta:
      "Celebrato la notte prima di Holi in India, Holika Dahan rappresenta la vittoria del bene sul male con falò che simboleggiano il trionfo della verità.",
    contentEng:
      "Celebrated the night before Holi in India, Holika Dahan represents the victory of good over evil with bonfires symbolizing the triumph of truth.",
    continente: "Asia",
    imageUrl: "https://example.com/images/holika-dahan.jpg",
  },
  {
    titleIta: "Festival delle lanterne",
    titleEng: "Lantern Festival",
    contentIta:
      "Il Festival delle Lanterne in Cina conclude il Capodanno lunare con spettacoli di lanterne illuminate, danze e celebrazioni culturali.",
    contentEng:
      "The Lantern Festival in China concludes the Lunar New Year with illuminated lantern displays, dances, and cultural celebrations.",
    continente: "Asia",
    imageUrl: "https://example.com/images/lantern-festival.jpg",
  },
  {
    titleIta: "Yam Carnival",
    titleEng: "Yam Carnival",
    contentIta:
      "Il festival culturale delle regioni africane celebra il raccolto con canti, balli e riti tradizionali.",
    contentEng:
      "The cultural festival of African regions celebrates the harvest with singing, dancing, and traditional rituals.",
    continente: "Africa",
    imageUrl: "https://example.com/images/yam-carnival.jpg",
  },
  {
    titleIta: "Ultra Music Festival",
    titleEng: "Ultra Music Festival",
    contentIta:
      "Festival di musica elettronica a Miami che raduna i più grandi DJ e migliaia di fan da tutto il mondo.",
    contentEng:
      "Electronic music festival in Miami gathering the world's biggest DJs and thousands of fans.",
    continente: "Nord America",
    imageUrl: "https://example.com/images/ultra-music-festival.jpg",
  },
  {
    titleIta: "Harbin Ice Festival",
    titleEng: "Harbin Ice Festival",
    contentIta:
      "Spettacolari sculture di ghiaccio in Cina rendono Harbin un'attrazione invernale mondiale.",
    contentEng:
      "Spectacular ice sculptures in China make Harbin a global winter attraction.",
    continente: "Asia",
    imageUrl: "https://example.com/images/harbin-ice-festival.jpg",
  },
];

export const EventsArray = ({ evento }) => {
  const { language } = useLanguage();

  return (
    <div id="continentsCard">
      <div id="style-cards-Namerica">
        <h3 className="titleEventsCard">
          {language === "it" ? evento.titleIta : evento.titleEng}
        </h3>
        <div className="imageEventsCard">
          <img src={evento.imageUrl} alt="event's Image" className="iamgesEvent"/>
        </div>
        <div className="contentEventsCard">
          <p>{language === "it" ? evento.contentIta : evento.contentEng}</p>
        </div>
      </div>
    </div>
  );
};
