  
/* Your code */
function getFromArray(index, array) {
    // try to pull only the items presented with a longer array.
   const newArray = array.splice(index)
    return newArray

}



/* Test Code */
const exampleArray = [ 1, 2, 3, 4, 5 ]
const gotEm = getFromArray(3, exampleArray)
console.log(gotEm) // [ 1, 2 ]
console.log(exampleArray)