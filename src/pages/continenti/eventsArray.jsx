/** @format */
import { useLanguage } from "../../context/LanguageContext";

export const eventi = [
  {
    titleIta: "Carnevale di Rio",
    titleEng: "Rio Carnival",
    contentIta:
      "Il Carnevale di Rio è una delle feste più famose al mondo, con sfilate spettacolari di samba, costumi colorati e una festa che coinvolge milioni di persone nelle strade di Rio de Janeiro, Brasile.",
    contentEng:
      "The Rio Carnival is one of the most famous festivals in the world, with spectacular samba parades, colorful costumes, and a celebration that involves millions of people in the streets of Rio de Janeiro, Brazil.",
    continente: "Sud America",
  },
  {
    titleIta: "Festa della Neve in Giappone",
    titleEng: "Snow Festival in Japan",
    contentIta:
      "Il Festival della Neve di Sapporo, in Giappone, è noto per le sue spettacolari sculture di neve e ghiaccio. Ogni anno attira milioni di visitatori per ammirare le opere d'arte e partecipare alle varie attività invernali.",
    contentEng:
      "The Sapporo Snow Festival in Japan is famous for its spectacular snow and ice sculptures. Every year, millions of visitors come to admire the artworks and participate in various winter activities.",
    continente: "Asia",
  },
  {
    titleIta: "Oktoberfest",
    titleEng: "Oktoberfest",
    contentIta:
      "L'Oktoberfest di Monaco di Baviera, in Germania, è il festival della birra più grande del mondo. Ogni anno, milioni di persone si riuniscono per assaporare birra tradizionale e cibi tipici in un'atmosfera festosa.",
    contentEng:
      "The Oktoberfest in Munich, Germany, is the world's largest beer festival. Every year, millions of people gather to enjoy traditional beer and food in a festive atmosphere.",
    continente: "Europa",
  },
  {
    titleIta: "Capodanno Cinese",
    titleEng: "Chinese New Year",
    contentIta:
      "Il Capodanno Cinese è una delle festività più importanti in Asia, con celebrazioni che durano diversi giorni. Le strade si animano con parate, danze dei draghi, fuochi d'artificio e cibi tradizionali.",
    contentEng:
      "Chinese New Year is one of the most important holidays in Asia, with celebrations lasting several days. The streets come alive with parades, dragon dances, fireworks, and traditional foods.",
    continente: "Asia",
  },
  {
    titleIta: "Festival dell'Acqua Songkran",
    titleEng: "Songkran Water Festival",
    contentIta:
      "Il Songkran è il festival del capodanno thailandese, celebrato con battaglie di acqua in tutto il paese. Le persone si spruzzano acqua l'una con l'altra come simbolo di purificazione e benedizione.",
    contentEng:
      "Songkran is the Thai New Year festival, celebrated with water fights throughout the country. People splash water on each other as a symbol of purification and blessing.",
    continente: "Asia",
  },
  {
    titleIta: "Day of the Dead",
    titleEng: "Day of the Dead",
    contentIta:
      "La festività messicana del Día de los Muertos celebra la vita dei defunti con altari decorati, cibo tradizionale, e danze. È un'occasione per onorare gli antenati e celebrare la morte come parte della vita.",
    contentEng:
      "The Mexican holiday Día de los Muertos celebrates the lives of the deceased with decorated altars, traditional food, and dances. It is an occasion to honor ancestors and celebrate death as part of life.",
    continente: "Nord America",
  },
  {
    titleIta: "Festival di Diwali",
    titleEng: "Diwali Festival",
    contentIta:
      "Diwali, conosciuto anche come il Festival delle luci, è una delle festività più importanti in India. Durante Diwali, le case vengono illuminate con luci, si scambiano regali, e si celebrano preghiere per la prosperità.",
    contentEng:
      "Diwali, also known as the Festival of Lights, is one of the most important holidays in India. During Diwali, homes are illuminated with lights, gifts are exchanged, and prayers are offered for prosperity.",
    continente: "Asia",
  },
  {
    titleIta: "Festa della Primavera in Cina",
    titleEng: "Spring Festival in China",
    contentIta:
      "Il Festival di Primavera, o Capodanno Cinese, è una delle celebrazioni più significative in Cina. Le famiglie si riuniscono per celebrare l'inizio del nuovo anno con cibo tradizionale, danze e fuochi d'artificio.",
    contentEng:
      "The Spring Festival, or Chinese New Year, is one of the most significant celebrations in China. Families gather to celebrate the start of the new year with traditional food, dances, and fireworks.",
    continente: "Asia",
  },
  {
    titleIta: "Festival di Edinburgh",
    titleEng: "Edinburgh Festival",
    contentIta:
      "Il Festival di Edinburgh è uno dei festival artistici più importanti d'Europa, con spettacoli di teatro, musica, danza e arte visiva che si tengono ogni anno nella capitale della Scozia.",
    contentEng:
      "The Edinburgh Festival is one of the most important artistic festivals in Europe, with theater, music, dance, and visual arts performances held every year in the capital of Scotland.",
    continente: "Europa",
  },
  {
    titleIta: "Carnaval de Barranquilla",
    titleEng: "Barranquilla Carnival",
    contentIta:
      "Il Carnevale di Barranquilla in Colombia è uno dei più grandi e importanti carnevali del paese, con parate, danze e tradizioni culturali che celebrano la diversità e la ricchezza della cultura colombiana.",
    contentEng:
      "The Barranquilla Carnival in Colombia is one of the largest and most important carnivals in the country, with parades, dances, and cultural traditions that celebrate the diversity and richness of Colombian culture.",
    continente: "Sud America",
  },
  {
    titleIta: "Carnival de Salvador",
    titleEng: "Salvador Carnival",
    contentIta:
      "Il Carnevale di Salvador, in Brasile, è uno dei più grandi del mondo, con parate, blocchi di strada, danze di samba e molta musica che rispecchia la cultura afro-brasiliana.",
    contentEng:
      "The Salvador Carnival in Brazil is one of the largest in the world, with parades, street blocks, samba dances, and lots of music reflecting Afro-Brazilian culture.",
    continente: "Sud America",
  },
  {
    titleIta: "Mardi Gras",
    titleEng: "Mardi Gras",
    contentIta:
      "Il Mardi Gras di New Orleans è una delle celebrazioni più famose degli Stati Uniti, con sfilate colorate, costumi elaborati, musica e feste che celebrano la cultura creola e afroamericana.",
    contentEng:
      "Mardi Gras in New Orleans is one of the most famous celebrations in the United States, with colorful parades, elaborate costumes, music, and parties celebrating Creole and African American culture.",
    continente: "Nord America",
  },
  {
    titleIta: "Festa di San Patrizio",
    titleEng: "St. Patrick's Day",
    contentIta:
      "La Festa di San Patrizio, celebrata il 17 marzo, è una festa irlandese che celebra il patrono dell'Irlanda. Viene festeggiata in tutto il mondo con parate, cibo tipico e musica tradizionale.",
    contentEng:
      "St. Patrick's Day, celebrated on March 17, is an Irish holiday that honors the patron saint of Ireland. It is celebrated worldwide with parades, traditional food, and music.",
    continente: "Nord America",
  },
  {
    titleIta: "La Feria de San Fermín",
    titleEng: "San Fermín Festival",
    contentIta:
      "La Feria di San Fermín a Pamplona, in Spagna, è famosa per la corsa dei tori, una tradizione che attira migliaia di turisti ogni anno, oltre a eventi religiosi, parate e danze popolari.",
    contentEng:
      "The San Fermín Festival in Pamplona, Spain, is famous for the Running of the Bulls, a tradition that attracts thousands of tourists every year, along with religious events, parades, and folk dances.",
    continente: "Europa",
  },
  {
    titleIta: "La Tomatina",
    titleEng: "La Tomatina",
    contentIta:
      "La Tomatina è un festival spagnolo che si svolge ogni anno a Buñol, in Spagna, dove milioni di persone si lanciano pomodori in una gigantesca battaglia, creando uno spettacolo di divertimento e disordine.",
    contentEng:
      "La Tomatina is a Spanish festival held annually in Buñol, Spain, where millions of people",
  },
];

export const EventsArray = ({ evento }) => {
  const { language } = useLanguage();

  return (
    <div className="continentsCard">
      <h3 className="titleEventsCArd">
        {language === "it" ? evento.titleIta : evento.titleEng}
      </h3>
      <p className="contentEventsCard">
        {language === "it" ? evento.contentIta : evento.contentEng}
      </p>
    </div>
  );
};
