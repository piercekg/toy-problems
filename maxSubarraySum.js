let maxSubarraySum = function(array) {
  let maxArray = [];
  for (let i = 0; i < array.length; i ++) {
    let sub = [array[i]];
    let j = i + 1;
    while (array[j] && !sub.includes(array[j])) {
      sub.push(array[j]);
      j ++;
    }
    if (arraySum(sub) > arraySum(maxArray)) {
      maxArray = sub;
    }
  }
  return maxArray;
};

let arraySum = function(array) {
  let sum = 0;
  for (i of array) {
    sum += i;
  }
  return sum;
};

let result = maxSubarraySum([4,2,4,5,6]);
console.log(result);