//var newArray = 0934275;
//var split = newArray.toString().split("");

//console.log(split[0] * 2);
//var doubles = [];
//for (var i = newArray.length -1; i >= 0; i -= 2) {
  //var double = (newArray[i] * 2);
//console.log(double);

//}

function check(num) {
  var numArray = num.toString().split("").map(Number);


    for (var i = numArray.length - 2; i >= 0; i -= 2) {
      numArray[i] = (numArray[i] * 2);
    }

    for (var j = 0; j < numArray.length; j++) {
      if (numArray[j] > 9) {
        numArray[j] = (numArray[j] - 9);
      }
    }

    var total = numArray.reduce(function(a, b) {
      return a + b;
    }, 0);
    //console.log(total);
//console.log(numArray);
/*
    if (total % 10 === 0) {
      return true;
    } else return false;
*/
    var modulo = (total % 10);
    console.log(modulo);

    return (modulo === 0 ? true : false);

}
//check(79927398713);
module.exports = check;