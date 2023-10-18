export const fallbackLng = 'ua';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'page';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
const dictionaries = (lng: string, ns: string) =>
  import(`@/data/${lng}/${ns}.json`).then(module => module.default);

export const getDictionary = async (lng: string, ns: string) => dictionaries(lng, ns);
