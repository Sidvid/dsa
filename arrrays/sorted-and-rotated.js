function sortedAndRotated(nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
    if (count > 1) return false;
  }

  return true;
}
console.log(sortedAndRotated([3, 4, 5, 1, 2]));
