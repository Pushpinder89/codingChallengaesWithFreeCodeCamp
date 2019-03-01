// reverse an array

var a = [1,4,3,2];

// Complete the reverseArray function below.
function reverseArray(a) {
    var newArray = [];
        for (var i = a.length-1; i >= 0; i--)
            newArray.push(a[i]);
        return newArray;
    // I could do a.reverse(); but wanted to solve it without this function's help.
    }