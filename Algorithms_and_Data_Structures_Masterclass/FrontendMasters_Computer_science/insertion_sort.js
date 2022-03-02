/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
*/
console.log(insertionSort([5, 3, 8, 2, 6, 4, 7, 9, 1,4]))

function insertionSort(nums) {
   for(let i = 1; i < nums.length; i++){
       let numberToInsert = nums[i] // the numberToInsert number we're looking to insert
       let j; // the inner counter

       // loop from the right to the left
       for( j = i - 1; nums[j] > numberToInsert && j >= 0; j--){
           // move numbers to the right until we find where to insert
           nums[j + 1] = nums[j];
       }
       // do the insertion
       nums[ j + 1] = numberToInsert;
   }
   return nums;
  }

//   The Big(O) is O(n^2)
//   Space Complexity O(1)