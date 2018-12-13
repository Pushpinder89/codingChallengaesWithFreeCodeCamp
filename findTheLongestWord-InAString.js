//problem
/* 
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//solution
function findLongestWordLength(str) {

    // first split the string into words and save in anothe variable, it should be now saved as an array.
    var wordsArr = str.split(" ");
  // check your work
    console.log(wordsArr);
    
    // Now create a variable to hold the maximum value, right now we dont know the maximum value so we will assume 
    // its 0 for now. each time our loop runs (until the given condition), its going to save the maximum length
    // of the word into this variable. if the length is less than what is already saved in the variable then it is 
    // going to skip the save and move next, but if it finds value greater than what we have in this variable
    // then its going to be replace that by that max length value.
     var maxLength = 0;
    
  // here we go through each word in the wordArr array 
    for(var i = 0; i < wordsArr.length; i++){
      
      //then check length of each word inside that array
      if(wordsArr[i].length > maxLength){
        
        // if word length is greater than the current value of maxLength then it will replace with greater value here
        maxLength = wordsArr[i].length;
      }
         
    }
   // now check your work
    console.log(maxLength);
    // and return the length of the longest word
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //test cases
  /*
  findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Passed
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Passed
findLongestWordLength("May the force be with you") should return 5.
Passed
findLongestWordLength("Google do a barrel roll") should return 6.
Passed
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Passed
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
  */