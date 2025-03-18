import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

interface IProps {
  languages: string[];
  currentLanguage: string;
  initialLanguage: string;
  debug?: boolean;
  onChange: (language: string) => void;
}

export const init = ({
  languages,
  currentLanguage,
  initialLanguage,
  debug,
  onChange,
}: IProps) => {
  i18n.on("languageChanged", (language) => {
    onChange(language);
  });

  const checkedCurrentLanguage = languages.includes(currentLanguage)
    ? currentLanguage
    : initialLanguage;

  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lng: checkedCurrentLanguage,
      fallbackLng: initialLanguage,
      debug,
      supportedLngs: languages,
      interpolation: {
        escapeValue: false,
      },
      ns: ["common"],
      defaultNS: "common",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      react: {
        useSuspense: false,
      },
    });
};
