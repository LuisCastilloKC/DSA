
/*
Jumbled Numbers

Programming challange description:

In this challange, you're given a string containing jumbled letters
from several concatenated words. Each word is a numeral from ZERO to NINE.
Each numeral may be used multiple times in the jumbled string.

write a program that returns integers corresponding to the numerals 
used to form the jumbled string. Integers must be sorted in ascending order.

For example, reuonninfe are shuffled lettes of thee strings ONE FOUR NINE. Your
program's output should be 149.

*/


console.log(jumbled_numbers("reuonninfe"))
// 149

// r e u

function jumbled_numbers(letters){

    var result = '';

    var numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    for(let i = 0; i < letters.length; i++){
       for(let j in numbers){
        if(letters[i] === numbers[j]){
            result += letters[i]
        }
        return result
    }
}

}

/*
make an object
with the words from 0 - 9


*/