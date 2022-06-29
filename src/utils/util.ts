
export interface ImageAPIData {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

export interface ImageData {
  url: string,
  w: number,
  h: number
}

export function randomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

export function getRandomImageDatas(n: number = 1): ImageData[] {
  return new Array(n).fill(null).map((_) => {
    const w = randomInt(30, 60) * 10;
    const h = randomInt(30, 60) * 10;
    return {
      w, h,
      url: `https://picsum.photos/${w}/${h}`
    }
  })
}

export function argmin(arr: number[]): number {
  let result = 0;
  let currMin = Infinity;
  arr.forEach((n, i) => {
    if (n < currMin) {
      currMin = n;
      result = i;
    }
  })
  return result;
}

export function argmax(arr: number[]): number {
  let result = 0;
  let currMax = -Infinity;
  arr.forEach((n, i) => {
    if (n > currMax) {
      currMax = n;
      result = i;
    }
  })
  return result;
}

