var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // Pointer for placing unique elements

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; // Move unique pointer forward
      nums[i] = nums[j]; // Place unique value at correct position
    }
  }
  console.log(nums);
  return i + 1; // The count of unique elements
};
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]));
