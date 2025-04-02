function nonRepeatingElem(array) {
  let count = {};
  array.forEach((elem) => {
    if (count[elem] > 0) {
      count[elem] = count[elem] + 1;
    } else {
      count[elem] = 1;
    }
  });
  return Object.keys(count).find((key) => {
    return count[key] === 1;
  });
}
console.log(nonRepeatingElem([1, 2, 2, 4, 4, 3, 5, 1, 5]));
