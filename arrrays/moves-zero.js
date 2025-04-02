function movesZeroToEnd(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
  return nums;
}
console.log(movesZeroToEnd([0, 1, 0, 2, 3, 0, 6, 0, 0, 7, 8, 1, 0]));
