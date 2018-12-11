//problem
/*Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

//solution
function reverseString(str) {
    // return str.split('').reverse().join('');
    var stringArr = str.split('').reverse().join('');
    //chek work with console.log
    console.log(stringArr);
    // if everything works fine then return the stringArr
    return stringArr;
  }
  
  reverseString("hello");

  //test cases: 
  /* 
  reverseString("hello") should return a string.
Passed
reverseString("hello") should become "olleh".
Passed
reverseString("Howdy") should become "ydwoH".
Passed
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".

  */