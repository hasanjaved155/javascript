let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Kadane's Algorithm
function maxSubArray(arr) {
  let currentSum = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    max = Math.max(max, currentSum);
  }
  return max;
}

//console.log(maxSubArray(arr)); // Output: 6
// Alternative approach using prefix sum
function maxSubArrayPrefixSum(array) {
  let maxSum = -Infinity;
  let prefixSum = 0;
  for (let i = 0; i < array.length; i++) {
    prefixSum += array[i];
    maxSum = Math.max(maxSum, prefixSum);
    if (prefixSum < 0) {
      prefixSum = 0;
    }
  }
  return maxSum;
}
//console.log(maxSubArrayPrefixSum(arr)); // Output: 6
// Brute Force approach
function maxSubArrayBruteForce(array) {
  let maxSum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += array[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}
//console.log(maxSubArrayBruteForce(arr)); // Output: 6

// Using Dynamic Programming
function maxSubArrayDP(array) {
  const dp = new Array(array.length).fill(0);
  dp[0] = array[0];
  let maxSum = dp[0];
  for (let i = 1; i < array.length; i++) {
    dp[i] = Math.max(array[i], dp[i - 1] + array[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
}
//console.log(maxSubArrayDP(arr)); // Output: 6
