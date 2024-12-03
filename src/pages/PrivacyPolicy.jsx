/** @format */
import "./PrivacyPolicy.css";
import { useLanguage } from "../context/LanguageContext";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import { Link } from "react-router-dom";

export function PrivacyPolicy() {
  const { language } = useLanguage();
  return (
    <>
      <Animation
        textIt={"Politica della Privacy"}
        textEng={"Privacy  Policy"}
      />
      <div className="privacyContainer">
        <ol className="privacy-policy">
          <p>
            <li>
              [Eventive Travels] ("noi", "nostro/a/i/e") si impegna a proteggere
              la privacy dei propri utenti. La presente Politica della Privacy
              descrive il tipo di informazioni personali raccolte, come vengono
              utilizzate, conservate e condivise, e i diritti degli utenti in
              relazione ai loro dati personali. Questa Politica della Privacy si
              applica all’utilizzo del sito web [inserire URL del sit] e di
              tutti i servizi correlati offerti.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">TIPI DI DATI RACCOLTI</h3>{" "}
              Raccogliamo i seguenti tipi di dati: Dati Identificativi: nome,
              cognome, indirizzo e-mail, numero di telefono, ecc. Dati Tecnici:
              indirizzo IP, tipo di browser, sistema operativo, identificatori
              dei dispositivi, ecc. Dati di Navigazione: cronologia di
              navigazione, dati di interazione con il sito, ecc. Dati di
              Utilizzo: informazioni sul comportamento dell’utente e utilizzo
              dei servizi.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">
                MODALITÀ DI RACCOLTA DEI DATI
              </h3>{" "}
              Raccogliamo i dati personali direttamente dall'utente (ad esempio,
              attraverso la compilazione di moduli), e automaticamente durante
              l'uso del nostro sito web tramite cookie e altre tecnologie di
              tracciamento.
              <hr className="hr" />
              <h3 className="titlePrivacyPolicy">FINALITÀ DEL TRATTAMENTO </h3>
              Utilizziamo i dati raccolti per le seguenti finalità: Fornitura di
              Servizi: per erogare e gestire i servizi richiesti. Comunicazioni:
              per inviare comunicazioni di servizio, newsletter (con il consenso
              dell'utente), aggiornamenti e notifiche. Personalizzazione
              dell’Esperienza Utente: per migliorare e personalizzare
              l’esperienza d’uso del sito. Analisi e Statistiche: per analizzare
              l’uso del sito e migliorarne le funzionalità. Obblighi Legali: per
              ottemperare a normative, regolamenti o richieste di autorità
              competenti.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">
                {" "}
                BASE GIURIDICA DEL TRATTAMENTO{" "}
              </h3>
              Il trattamento dei dati si basa su una o più delle seguenti basi
              legali: Consenso: in caso di comunicazioni promozionali e
              marketing diretto. Esecuzione di un Contratto: per fornire i
              servizi richiesti. Obblighi Legali: per adempiere ad obblighi
              normativi. Interesse Legittimo: per migliorare i nostri servizi e
              garantire la sicurezza del sito.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">CONDIVISIONE DEI DATI </h3>I
              dati personali possono essere condivisi con terze parti nei
              seguenti casi: Fornitori di Servizi: come partner tecnologici,
              hosting provider, fornitori di servizi di marketing. Autorità
              Competenti: se richiesto per legge o per proteggere i nostri
              diritti.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">
                TRASFERIMENTO INTERNAZIONALE DEI DATI
              </h3>{" "}
              I dati raccolti possono essere trasferiti e trattati al di fuori
              del paese di residenza dell’utente, in paesi che potrebbero non
              garantire un livello di protezione equivalente. In questi casi,
              garantiamo che tali trasferimenti siano conformi alle normative
              applicabili, utilizzando adeguate garanzie contrattuali.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">CONSERVAZIONE DEI DATI</h3> I
              dati personali saranno conservati per il tempo necessario a
              conseguire le finalità per cui sono stati raccolti o per
              rispettare obblighi di legge. [Eventive Travels] applicherà misure
              per garantire la cancellazione o l’anonimizzazione dei dati al
              termine del periodo di conservazione.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">DIRITTI DELL’UTENTE </h3>Gli
              utenti possono esercitare i seguenti diritti: Accesso: richiedere
              informazioni sui propri dati personali trattati. Rettifica:
              richiedere la correzione di dati inesatti o incompleti.
              Cancellazione: richiedere la cancellazione dei propri dati (in
              determinate circostanze). Limitazione: richiedere la limitazione
              del trattamento dei propri dati. Portabilità: ottenere una copia
              dei propri dati in formato strutturato e leggibile. Opposizione:
              opporsi al trattamento dei dati per finalità di marketing. Per
              esercitare i propri diritti, l'utente può contattarci a
              [example@gmail.com].
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">SICUREZZA DEI DATI </h3>
              Adottiamo misure di sicurezza adeguate per proteggere i dati
              personali da accessi non autorizzati, perdita o modifica.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">
                COOKIE E TECNOLOGIE SIMILARI
              </h3>{" "}
              Utilizziamo cookie e tecnologie simili per raccogliere
              informazioni durante la navigazione sul sito. Gli utenti possono
              gestire le proprie preferenze sui cookie attraverso le
              impostazioni del browser.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">
                MODIFICHE ALLA POLITICA DELLA PRIVACY
              </h3>{" "}
              Ci riserviamo il diritto di modificare la presente Politica della
              Privacy. Le modifiche saranno pubblicate su questa pagina con una
              data di aggiornamento. Gli utenti sono invitati a consultare
              regolarmente questa pagina per verificare eventuali modifiche.
            </li>
            <hr className="hr" />
            <li>
              <h3 className="titlePrivacyPolicy">CONTATTI</h3> Per domande o
              chiarimenti sulla presente Politica della Privacy, è possibile
              contattarci a: Email: [example@gmail.com] Indirizzo: [via enzo
              rossi 11b] [Eventive Travels]
            </li>
            <hr className="hr" />
            <p className="privacyEnd">
              &copy;
              <Link to="/">EventiveTravels</Link>
              {language === "it"
                ? ", tutti i diritti riservati."
                : ", all rights deserved."}
            </p>
          </p>
        </ol>
      </div>
    </>
  );
}
