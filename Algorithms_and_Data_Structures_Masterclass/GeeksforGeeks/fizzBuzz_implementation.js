/*

Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”. 

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, 
Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, 
Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

*/

/*

 1 / 2 =0.5 remainder of 0.5
 2 / 2 = 1 remainder of 0
 3 / 2 1.5 remainder of 1.5

 1 % 2 = 0.5
 2 % 2 = 0
 3 % 2 = 1.5
*/

function fizzBuzz(num){
    for( let i = 1; i <= num; i++){
        if (i % 15 === 0)
        console.log("Fizz Buzz");
        else if(i % 3 === 0)
        console.log("Fizz");
        else if( i % 5 === 0)
        console.log("Buzz")
        else
        console.log(i)
    }
}

fizzBuzz(100)
