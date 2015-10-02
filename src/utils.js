export function inArray(val, array) {
  for (const arrayVal of array) {
    if (val === arrayVal) return true;
  }
  return false;
}

export function emptyFunc() {}

export function arrayMax(numArray) {
  return Math.max.apply(null, numArray);
}

export function arrayMin(numArray) {
  return Math.min.apply(null, numArray);
}

export function getExtremes(numArray) {
  const max = arrayMax(numArray);
  const min = arrayMin(numArray);
  const mid = (max + min) / 2;
  return [max, mid, min];
}