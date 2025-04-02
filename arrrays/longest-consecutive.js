function longestConsecutive(array) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}
console.log(longestConsecutive([1, 0, 1, 1, 0, 1]));
