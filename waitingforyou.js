// Create an function that removes duplicates from an array


let duplicateNames = ["John", 2, 22, "Mary", 21, 22, "Alex", "Steve", 12, "Mary", "John", 2]


function removeDuplicates(list) {
let newArray = []
list.forEach((item) => {
     if (!newArray.includes(item)) {
        newArray.push(item);
    } })
    return newArray
}


console.log(removeDuplicates(duplicateNames))
// answer: ['John', 2, 22, 'Mary', 21, 'Alex', 'Steve', 12]




    

