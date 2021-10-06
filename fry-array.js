const testData1 = ["hello", null, 0, 10, "false", -2, true, false];

function allStringsContainA(arr) {
  return arr.some((string) => {
    return typeof string === "string" && string.indexOf("a") !== -1;
  });
}
console.log(allStringsContainA(testData1));







function anyItemIsNumber(array) {
  return !array.some((el) => typeof el == "number");
}
console.log(anyItemIsNumber(testData1));







const testData = [true, false, true, false, true, false];
function allItemsBoolean(array) {
  return array.every((el) => typeof el === "boolean");
}
console.log(allItemsBoolean(testData));








const truthyArray = ["hello", 10, "false", -2, true, false];
function allTruthy(arr) {
  return arr.every((el) => Boolean(el) === true);
}

console.log(allTruthy(truthyArray));
