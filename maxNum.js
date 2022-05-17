// Write a function that takes an array of numbers and outputs the max number.

//Ex:
// Input: [1,2,3]

// Output: 3

const getMaxNum = (arr) => {
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        maxValue = Math.max(maxValue, arr[i]);
    }
    return maxValue;
}

console.log(getMaxNum([1,2,3]));
console.log(getMaxNum([1,6,4,5,2,1]));
