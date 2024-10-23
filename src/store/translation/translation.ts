import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import en from "@/app/translations/english.json";
// import am from "@/app/translations/armenian.json";
// import ru from "@/app/translations/russian.json";

interface TranslationInitailState {
//   language: any;
//   showDepDDBool: boolean | undefined;
//   showDepDD: boolean | undefined;
}

const initialState: TranslationInitailState = {
//   language: en, // default to English
//   showDepDDBool: undefined,
//   showDepDD: undefined,
};

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string | number>) {
      let langId = String(action.payload);
      if (langId === "1") {
        state.language = en;
        localStorage.setItem("langId", "1");
        document.cookie =
          "lang=en; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
      } else if (langId === "2") {
        state.language = ru;
        localStorage.setItem("langId", "2");
        document.cookie =
          "lang=ru; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
      } else if (langId === "3") {
        state.language = am;
        localStorage.setItem("langId", "3");
        document.cookie =
          "lang=am; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
      }
    },
  },
});

export const { changeLanguage } = translationSlice.actions;
export default translationSlice.reducer;
