/* Your code */

function addDashes(value) {
    const newArray = Array.from(value.toString()).map(Number)

    return newArray.join('-')

}


/* Test Code */
const number = 481276
const dashed = addDashes(number)
console.log(dashed) // '4-8-1-2-7-6'