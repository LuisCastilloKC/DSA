/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

console.log(bubbleSort([5, 3, 8, 2, 6, 4, 7, 9, 1,4]))

function bubbleSort(nums) {
    // code goes here
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < nums.length; i++){
        if (nums[i] > nums[i + 1]){
          const temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped)

    return nums;
  }

  // time complexity is O(N^2)
  // It is O of N Square because there is one inner loop and one outer loop.
  // the inner loop run first and check and compare both number after the first itaration
  // there is another loop that check if there is was a change in the array

  // If the Array is sorted like [1,2,3,4,5,6,7,8,9,10] then the time complexity is constant O(1)
  // because it only does one iteration and there is no change on the Original Array