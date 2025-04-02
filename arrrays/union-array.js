function unionArray(a, b) {
  const uniqueArray = [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
  return [...new Set(uniqueArray)];
}
console.log(unionArray([1, 2, 3, 6, 7], [1, 2, 3, 4, 5]));
