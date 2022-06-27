import IMAGE_URLS from '../assets/images-url.json'

export function getRandomImages(n: number = 1): string[] {
  return Array(n).fill(0).map(() => (
    IMAGE_URLS.urls.at(
      Math.floor(Math.random() * IMAGE_URLS.urls.length))!
  ))
}