import { createContext, useState, useContext } from "react";

const LanguageContext = createContext(undefined);
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("it");

  const value = {
    language,
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={{ value }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.log("Error changing language");
  }
  return context;
};
