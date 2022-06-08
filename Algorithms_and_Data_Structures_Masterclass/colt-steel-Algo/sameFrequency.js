 /* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digists.
Your solution MUST have the following complexities:

Time: O(N)

Sample input:
1. sameFrequency(182, 281) // true
2. sameFrequency(34, 14) // false
3. sameFrequency(3589578, 5879385 ) // true
4. sameFrequency(22, 222) // false
 */

function sameFrequency(num1, num2){
   
      let freq1 = {}
      let freq2 = {}
  
      for( let val of num1.toString()){
          freq1[val] = (freq1[val] || 0) +1
      }
  
      for(let val of num2.toString()){
          freq2[val] = (freq2[val] || 0) +1
      }
  
      for( let count in freq1){
        if(freq1[count] !== freq2[count]) return false
      }
      return true
      // if arr1.length != arr2.length return false
      // create 2 empty obj
      
  }
  
console.log(sameFrequency(182, 281)) // true
//sameFrequency(34, 14) // false
//sameFrequency(3589578, 5879385 ) // true
//sameFrequency(22, 222) // false