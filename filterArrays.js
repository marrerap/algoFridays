const testData = ["hello", null, 0, 10, "false", -2, true, false];

function removeFalsy(array) {
  return array.filter((el) => !!el);
}
console.log(removeFalsy(testData));

const testData2 = ["hello", "hello", "world", "world"];

function removeDuplicate(array) {
  return array.filter((el, index) => array.indexOf(el) !== index);
}

console.log(removeDuplicate(testData2));

const testData3 = ["hello", "pancake", "banana", "waffle", "world"];

function removeSmallWords(array) {
  return array.filter((el) => el.length < 6);
}

console.log(removeSmallWords(testData3));
