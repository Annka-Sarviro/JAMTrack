// import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionary = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/footer.json`)).default,
    ...(await import(`@/dictionaries/en/usersidebar.json`)).default,
  }),

  ua: async () => ({
    ...(await import(`@/dictionaries/ua/footer.json`)).default,
    ...(await import(`@/dictionaries/ua/usersidebar.json`)).default,
  }),
};

// const sideBarDictionaries = {
//   en: async () => ({
//     ...(await import(`@/data/en/usersidebar.json`)).default,
//     // ...(await import(`@/dictionaries/en/home.json`)).default,
//   }),

//   ua: async () => ({
//     ...(await import(`@/data/ua/usersidebar.json`)).default,
//     // ...(await import(`@/dictionaries/ua/home.json`)).default,
//   }),
// };

// const metadata = {
//   en: async () => ({
//     ...(await import(`@/dictionaries/en/meta/common.json`)).default,
//     // ...(await import(`@/dictionaries/en/meta/home.json`)).default,
//   }),

//   ua: async () => ({
//     ...(await import(`@/dictionaries/ua/meta/common.json`)).default,
//     // ...(await import(`@/dictionaries/ua/meta/home.json`)).default,
//   }),
// };

// const commonDictionaries = {
//   en: async () => (await import(`@/dictionaries/en/common.json`)).default,
//   ua: async () => (await import(`@/dictionaries/ua/common.json`)).default,
// };

// export const getDictionary = async (lang: Locale) => dictionary[lang]();
// export const getSideBarDictionaries = async (lang: Locale) => sideBarDictionaries[lang]();
// export const getMetadata = async (lang: Locale) => metadata[lang]();
// export const getCommonDictionaries = async (lang: Locale) => commonDictionaries[lang]();

export const getDictionary = async (locale: Locale) => {
  return locale == 'ua' ? dictionary.ua() : dictionary.en();
};
