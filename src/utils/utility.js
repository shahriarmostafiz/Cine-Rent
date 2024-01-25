export function getImageUrl(fileName) {
  return new URL(`../assets/movie-covers/${fileName}`, import.meta.url).href;
}
