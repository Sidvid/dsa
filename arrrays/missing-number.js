function missingNumber(nums) {
  let round = Math.max(...nums) + 1;

  let num;
  for (let index = 0; index <= round; index++) {
    const element = nums[index];
    console.log("index", index);
    if (!nums.includes(index)) {
      num = index;

      break;
    }
  }
  return num;
}
console.log(missingNumber([0, 1]));
