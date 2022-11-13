const findMinimum = arr => {

  // Your code here

  let min = arr[0]
  //let min = Infinity affects space complexity due to how large it is

  for (let i=1; i<arr.length; i++) // time : linear
  {
    if(arr[i] < min) // time : constant
    {
      min = arr[i]
    }
  }

  return min

}; // time complexity linear space complexity constant

const runningSum = arr => {

  // Your code here

  //console.log('orignial' , arr)

  if(arr.length === 0)
  {
    return arr
  }

  let array = []
  let sum = 0
  for(let i=0; i<arr.length; i++)
  {
    sum = sum + arr[i]
    array.push(sum) //linear bec the push is inside the for
  }
  return array

}; //time : linear space : linear

const evenNumOfChars = arr => {

  // Your code here
  let count = 0
  for(let i=0; i<arr.length; i++) // time : linear
  {
    if(arr[i].length %2 === 0) // time : constant
    {
      count ++
    }
  }

  return count
}; // time complexity : linear space compelxity : constant

const smallerThanCurr = arr => {

  // Your code here

  // let array = []



  // if(arr.length === 0)
  // {
  //   return array
  // }


  // let count = 0
  // let pop = arr.pop()

  // for(let i=0; i<arr.length; i++)
  // {

  //   if(arr[i] < pop)
  //   {
  //     count++
  //   }
  // }

  // array.push(count)




  // return array.concat(smallerThanCurr(arr))

};

const twoSum = (arr, target) => {

  let object = {}

  for(let i=0; i<arr.length; i++)
  {
    object[i] = arr[i]
  }
  let reverse = arr.reverse()

  for(let i=0; i<reverse.length; i++)
  {
    if(arr[i] + reverse[i] === target)
    {
      return false
    }
  }

  return true



};

const secondLargest = arr => {

  // Your code here

  let max = 0

  for(let i=0; i<arr.length; i++)
  {
    if(arr[i] > max)
    {
      max = arr[i]
    }
  }

  arr.splice(arr.indexOf(max), 1) // time : o(n) , space : o(1)

  //slice o(n)

  let second = 0

  for(let i=0; i<arr.length; i++)
  {
    if(arr[i] > second )
    {
      second = arr[i]
    }
  }

  if(second === 0)
  {
    second = undefined
  }

  return second
};

const shuffle = (arr) => {

  // Your code here
  

};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
