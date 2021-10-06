const prompt = require('prompt-sync')({sigint:true})

let num = parseInt(prompt("How far do you want to see the Fibonacci go? "));

function fibonacci(number) {
    // define the first two variables because it will be easier to manage 
    // when making a function to add the two previous numbers
    let staticNum1 = 0
    let staticNum2 = 1
    // Create iff statement for the value of 0 or less 
    if (number <= 0){
        console.log("Enter a number greater than 0 please!!!")
    }
    // Handle the user input of 1 
    else if (number == 1) {
        console.log(`0: ${staticNum1}`)
    }
    // handle user input for all other values
    else if (number >= 2) {
        // print out the first 2 values
        console.log(`1: ${staticNum1}`)
        console.log(`2: ${staticNum2}`)
        // loop through each following number if user input is greater than 2
        for (let i = 0; i < number - 2; i++) {
            let next_num = staticNum1 + staticNum2
            // added a counter to build the left number while iterating through fib seq
            let counter = i + 3
            // log each iteration
            console.log(`${counter}: ${next_num}`)
            // replace the 2 previous variable with the new numbers to continue building
            // the fib sequence
            staticNum1 = staticNum2
            staticNum2 = next_num
            counter ++            
        }
    }
    
}

fibonacci(num);
