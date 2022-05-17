// Write a function that takes an integer and outputs the sum of all numbers from 1 to that integer
// ex. Input: 4
// Output: 1 + 2 + 3 + 4 = 10

// function getSum(num) {

const getSum = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(4));