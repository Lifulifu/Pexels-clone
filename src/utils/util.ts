
export interface ImageAPIData {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

export async function getRandomImages(n: number = 1): Promise<ImageAPIData[]> {
  const url = `https://picsum.photos/v2/list?page=2&limit=${n}`;
  let res = await fetch(url);
  if (res)
    return res.json();
  else
    return [];
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

