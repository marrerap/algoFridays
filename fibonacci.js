const prompt = require('prompt-sync')({sigint:true})

let num = parseInt(prompt("How far do you want to see the Fibonacci go? "));

function fibonacci(number) {
    let staticNum1 = 0
    let staticNum2 = 1
    if (number <= 0){
        console.log("Enter a number greater than 0 please!!!")
    } else if (number == 1) {
        console.log(`0: ${staticNum1}`)
    }else if (number >= 2) {
        console.log(`1: ${staticNum1}`)
        console.log(`2: ${staticNum2}`)
        for (let i = 0; i < number - 2; i++) {
            let next_num = staticNum1 + staticNum2
            let counter = i + 3
            console.log(`${counter}: ${next_num}`)
            staticNum1 = staticNum2
            staticNum2 = next_num
            counter ++            
        }
    }
    
}

fibonacci(num);
