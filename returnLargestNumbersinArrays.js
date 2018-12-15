//problem
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

//solution
function largestOfFour(arr) {
    // create an empty arry to hold the largest numbers from each array inside the largestOfFour(arr)
    var largestNumsArray = [];
   
    // go through each array inside one big array  
  for(var i = 0; i < arr.length; i++){
    // create a variable to store the 0th index of each array everytime the loop is going through the small arrays.
    var largestnum = arr[i][0];
    // create another for loop to go through each small array
    for(var j = 1; j < arr[i].length; j++){
     // comapare the number stored from main array to this inside array 
      if(arr[i][j] > largestnum){
        // if the number is greater than what we already have in the array then replace the number with the largest number
        largestnum = arr[i][j];
        
      }
    }
    // push the largest number into this array
    largestNumsArray[i] = largestnum;
  }
  //check your work
    console.log(largestNumsArray)
    // return the largest numbers from the array after the loop ends
  return largestNumsArray;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  // test cases

 /* largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Passed
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Passed
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Passed
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
*/