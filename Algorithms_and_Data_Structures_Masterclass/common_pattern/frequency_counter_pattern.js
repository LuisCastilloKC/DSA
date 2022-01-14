/* 

Write a function called SAME, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array. The frequency of values must be the same.

    EXAMPLE:    

    same([1,2,3], [4,1,9]) - // true
    same([1,2,3], [1,9]) - // false
    same([1,2,1], [4,4,1]) - // fale (must be same frequency)
*/

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }



console.log(same([1,2,3,2,8], [9,1,4,4,64]))

// this is an O(n^2)

function same(arr1, arr2){
    //if the length of arr1 is not equal to arr2 then return false
    if(arr1.length !== arr2.length){
        return false
    }
    // set the frequency to empty object
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // iterate over arr1 first
    // this is checking how many time the key repeat 
    // example in arr1  number 1 repeat 1 but number 2 repeat two time
    // { '1': 1 }
    // { '1': 1, '2': 1 }
    // { '1': 1, '2': 1, '3': 1 }
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        console.log(frequencyCounter1)
    }
    //same as above process fir arr2
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true

}


// The Big O is O(n) 


console.log(validAnagram('anagram', 'nagaram'))


    function validAnagram(str1, str2){
        if(str1.length !== str2.length){
            return false
        }
      const lookup = {}

      for(let i = 0; i < str1.length; i++){
          let letter = str1[i];
          // if letter exist, increment, otherwise set to 1
          lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
          console.log(lookup)
      }

      for(let i = 0; i < str2.length; i++){
          let letter = str2[i];
          // can't find letter or letter is zero then it's not an anagram
          if(!lookup[letter]){
              return false;
          } else {
              lookup[letter] -= 1;
              console.log(lookup)
          }
      }
      return true
    }

    // Big O is O(n)