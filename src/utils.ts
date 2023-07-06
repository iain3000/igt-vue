export const getImageUrl = (path: string) => {
  if (path === "") {
    throw "path can't be empty";
  }
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};
