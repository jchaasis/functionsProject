// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){

  if (num1>num2){
    return (num1);
  }

  else if (num1<num2){
    return (num2);
  }

  else {
    return ('equal');
  }
}
console.log(max(15,8));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
  if (num1 > (num2 && num3)) {
    return (num1);
  }
  else if (num2 > (num1 && num3)){
    return (num2);
  }
  else if (num3 > (num1 && num2)){
    return (num3);
  }
}
console.log(maxOfThree(63,4,10));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === ('a' || 'e' || 'i' || 'o' || 'u')){
      return (true);
    }
    else {
      return (false);
    }
}

console.log(isVowel('a'));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2){
  return (num1 + num2);
}

console.log(sum(4,6));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3){
  return((num1 + num2 + num3)/3);
}

console.log(avg(3,6,9));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string) {
  return(string.length);
}

console.log(getLength("Stringcheese strings"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1,num2) {

  if (num1>num2){
    return(true);
  }

  else{
    return(false);
  }
}

console.log(greaterThan(9,8));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){

  return( "Hello," + " " + name +"!")

}

console.log(greet('Rock'));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

let adj= 'quick';
let color= 'brown'
let animal= 'fox'
let action= "jumps over the fence."

function madlib(string1,string2,string3,string4){
  return (string1 + " " + string2 + " " + string3 + " " + string4);
}

console.log(madlib(adj,color,animal,action));
