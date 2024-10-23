"use client";
import { useEffect, useState } from "react";
import style from "./languageSwitcher.module.scss";
import { Locales, usePathname, useRouter } from "@/i18n/routing";
import { useGetTokenMutation } from "@/services/token";
import { getRegisterGuestModel } from "@/utils/registerGuest";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState<number>(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [getToken, { isLoading, isError }] = useGetTokenMutation();

  const languageCodes = [
    {
      id: 1,
      name: "Eng",
      img: "https://yerevan-city.am/assets/images/en-flag.png",
      locale: Locales.EN,
    },
    {
      id: 2,
      name: "Рус",
      img: "https://yerevan-city.am/assets/images/ru-flag.svg",
      locale: Locales.RU,
    },

    {
      id: 3,
      name: "Հայ",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/800px-Flag_of_Armenia.svg.png",
      locale: Locales.AM,
    },
  ];

  function changeLangHandler(langId: number) {
    setSelectedLang(langId);
    const selectedLanguage = languageCodes[langId - 1];
    if (!selectedLanguage) return;
    setIsDropdownOpen(false);

    if (typeof window !== "undefined") {
      localStorage.setItem("langId", langId.toString());
    }
    router.push(pathname, { locale: selectedLanguage.locale });
    
    setTimeout(() => {
      window.location.reload()
    },500)
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const langId = localStorage.getItem("langId");
      if (langId) {
        setSelectedLang(parseInt(langId));
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      getToken(getRegisterGuestModel())
        .unwrap()
        .then((response) => {
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.error("Error fetching token:", error);
        });
    }
  }, [getToken]);

  return (
    <div className={style.custom_select}>
      <div className={style.selected_lang} onClick={toggleDropdown}>
        <img src={languageCodes[selectedLang - 1].img} alt="flag" />
        <span>{languageCodes[selectedLang - 1].name}</span>
      </div>
      {isDropdownOpen && (
        <div className={style.dropdown}>
          {languageCodes.map((lang) => (
            <div
              key={lang.id}
              className={
                selectedLang !== lang.id
                  ? style.dropdown_item
                  : `${style.dropdown_item} ${style.active_language}`
              }
              onClick={() => changeLangHandler(lang.id)}
            >
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
