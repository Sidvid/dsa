function largestElement(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (largest < arr[i + 1]) {
      largest = arr[i + 1];
    }
  }
  return largest;
}
const arr = [1, 2, 3, 6, 4, 5];
console.log(largestElement(arr));
