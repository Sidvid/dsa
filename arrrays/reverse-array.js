function reverseArray(array, k) {
  let end = k - 1;
  let start = 0;

  while (end > start) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8], 4));
