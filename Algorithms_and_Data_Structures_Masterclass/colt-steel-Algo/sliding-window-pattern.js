function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    // if num is greater then length of arr we return null Ex: [2,4] 3  so 3 is greater then the length of the arr
    if(arr.length < num) return null;
    // we loop through arr upto num which is the first 3 number of arr
    for(let i = 0; i < num; i++){
        //then we add the sum of the first 3 number to maxSum count
        maxSum += arr[i];
    }
    // then we move the sum that we have in maxSum to tempSum
    tempSum = maxSum
    // Now we loop the arr after the first three numbers of arr
    for(let i = num; i < arr.length; i++){
        // Now we remove the first number of the group of three that we just add and then add the next after the three number ex: remove 2 and add 2
        tempSum = tempSum - arr[i - num] + arr[i];

        // Math.sum take the highest number from maxSum or tempSum and it become maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    // then we return maxSum because maxSum has the highest number
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))