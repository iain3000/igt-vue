export const getImageUrl = (path: string) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};
