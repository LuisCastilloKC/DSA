// Find the Missing Number
// Problem Statement
// You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number ‘x’. You have to find ‘x’. The input array is not sorted.

// For example, let’s look at the below array.

// widget
// Hint
// How would you calculate the sum of numbers from 1 to n?

let find_missing = function(input) {
    //  calculate sum of all integers
    //  in input list

    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    return sum_of_n - actual_sum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Missing Number");
console.log("---------------------------------------");

let random_array = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];
let actual_missing = find_missing(random_array);
console.log("actual missing is " + actual_missing);