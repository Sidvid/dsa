function secondLargestElement(array) {
  const sortedArray = [...new Set(array.sort((a, b) => a - b))];
  console.log(sortedArray);
  return sortedArray.length > 1 ? sortedArray[sortedArray.length - 2] : -1;
}
console.log(secondLargestElement([12, 35, 1, 10, 34, 1]));
