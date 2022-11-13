const findMinimum = arr => {

  // Your code here

  let min = arr[0]
  //let min = Infinity affects space complexity due to how large it is

  for (let i=1; i<arr.length; i++) // Time Complexity: Linear
  {

    //conditionals usually have a constant time complexity unless iterating within such .includes
    if(arr[i] < min) // Time Complexity: Constant
    {
      min = arr[i]
    }
  }

  return min

}; // Time Complexity: Linear  ----- Space Complexity: Constant

const runningSum = arr => {

  // Your code here

  let array = []
  let sum = 0

  for(let i=0; i<arr.length; i++) // Time Complexity : Linear
  {
    sum = sum + arr[i]
    array.push(sum)  //linear bec the push is inside the for
  }
  return array

}; //Time Complexity: Linear ----- Space Complexity: Linear

const evenNumOfChars = arr => {

  // Your code here
  let count = 0
  for(let i=0; i<arr.length; i++) // Time Complexity: Linear
  {
    if(arr[i].length %2 === 0) // Time Complexity: Constant
    {
      count ++
    }
  }

  return count
}; // Time Complexity: Linear ------------ Space Compelxity: Constant

const smallerThanCurr = arr => {

  // Your code here



};

const twoSum = (arr, target) => {

  if(arr.length === 0)
  {
    return false
  }

  let pop = arr.pop()

  for(let i=0; i<arr.length; i++)
  {
    if(arr[i] + pop === target)
    {
      return true
    }
  }

  return twoSum(arr, target)
}; //since it is recursive ----  Time Complexity: Linear ---- Space Complexity ??? Linear

const secondLargest = arr => {

  // Your code here

  let max = 0

  for(let i=0; i<arr.length; i++) // Time Complexity: Linear
  {
    if(arr[i] > max) //Time Complexity: Constant
    {
      max = arr[i]
    }
  }

  arr.splice(arr.indexOf(max), 1) // Time Complexity: o(n) ----- Space Complexity: o(1)

  //array.slice()  Space Complexity: o(n)

  let second = 0

  for(let i=0; i<arr.length; i++) //Time Complexity: Linear
  {
    if(arr[i] > second ) //Time Complexity: Constant
    {
      second = arr[i]
    }
  }

  if(second === 0) // Time Complexity: Constant
  {
    second = undefined
  }

  return second
}; // Time Complexity: Linear ------ Space Complexity: Constant 

const shuffle = (arr) => {

  // Your code here


};

// console.log(twoSum([4, 2, 5, 7, 9], 10))
// console.log(twoSum([4, 2, 3, 6, 9], 16))


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
