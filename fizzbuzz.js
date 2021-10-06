// create a function to iterate through and print 
function fizzBuzz (num) {
    // create a for loop for each line
    for (let index = 0; index <= num; index++) {
     
        if ((index % 3 === 0) && (num % 5 === 0)){
             console.log('fizzbuzz');
        }
        else if (index % 5 === 0) {
            console.log('buzz');
        }
        else if (index % 3 === 0) {
         console.log('fizz');
        } 
        else {
             console.log(index +=1);
        }
     
        
    }
}

fizzBuzz(15)
        