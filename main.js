// #1 - Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.

var tripleFive = function(){
	for(var i=0 ; i<3 ; i++)
		console.log("Five!");
}

console.log(tripleFive());

// #2 - Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.

function lastLetter(str) {
	return str.charAt(str.length-1);

}
console.log(lastLetter("island"));

// #3 - Write a function called 'square' which takes a single argument which is a number, and returns number * number.

function square(num){
	return num*num;
}
console.log(square(5));

// #4 - Write a function called 'negate' which takes a single number argument and returns the negative of that number.

function negate(num){
	return num*(-1);
}
console.log(negate(5));
console.log(negate(-8));

// #5 - Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
var toArray = function(a,b,c){
	var newArray = [a,b,c];
	return newArray;
}
console.log (toArray(1,4,5));
console.log (toArray(8,9,10));

// #6 - Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
function startsWithA(str){
	if(str.charAt(0).toLowerCase() === "a"){
		return true;
	}
	else { return false; }
}
console.log(startsWithA("Aardvark"));
console.log(startsWithA("bear"));

// #7 - Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.

var excite = function(str){
	return str + "!!!";

}
console.log(excite("yes"));
console.log(excite("go"));

// #8 - Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.

var sun = function(str){
	if(str.indexOf("sun") >= 0){
		return true;
	}
	else{
		return false;
	}
}
console.log(sun("sundies"));
console.log(sun("asunder"));
console.log(sun("catapult"));

// #9 - Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.

function tiny(num){
	if(num > 0 && num < 1){
		return true;
	}
	else{ return false; }
}
console.log (tiny(.3));
console.log (tiny(14));
console.log (tiny(-5));


// #10 - Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.

function getSeconds(str){
	return (Number(str.substring(0,2))*60)+(Number(str.substring(3,5)));
}
console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));





