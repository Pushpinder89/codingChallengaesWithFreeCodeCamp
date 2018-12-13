// problem
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

//solution

function factorialize(num) {
    var total = num;
    //first check if the number is 0, if it is then return 1
    if(num === 0){
      return 1;
    }
    //else if the number is not 0 then move on to next step in this else.
    else{
      //we start from i = 1 and go until i < num
        for(var i = 1; i < num ; i++){
          //then do our math
      total *= i;
    }
    // check our work in consile.log
    console.log(total);
    // if everything works then rturn total
    return total;
  
    }
  
  }
  
  factorialize(10);


  //test cases

  /*
factorialize(5) should return a number.
Passed
factorialize(5) should return 120.
Passed
factorialize(10) should return 3628800.
Passed
factorialize(20) should return 2432902008176640000.
Passed
factorialize(0) should return 1.
  */