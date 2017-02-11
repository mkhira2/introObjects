// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

// see test.js for example usage

var flipColor = function(object) {
    if (object['color'] === 'red') { // determines if object[color] is red
        object['color'] = 'blue'     // if object[color] is red, turn to blue
    } 
    else if (object['color'] === 'blue') { // determines if object[color] is blue
        object['color'] = 'red'            // if object[color] is blue, turn to red
    }
    return object                          // gets object out of function
}


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage

var getFullNames = function(arrayOfObjects) {
    var arrayOfStrings = []                             // create array that will hold full names
 	for (var i = 0; i < arrayOfObjects.length; i++) {     // iterate through input array
     arrayOfStrings.push(arrayOfObjects[i]['first'] + ' ' + arrayOfObjects[i]['last'] ) // push first+last names from input array to created array
    }
	return arrayOfStrings                                 // output array created on line 34 with full names pushed into it
}

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage

var generateDog = function(stringName) {              
	var dog = {
		name: stringName,
		legs: 4,
		weight: 150,
		color: 'brown',
		speak: function(stringWord) {                     // method begins here
			var wordsArray = stringWord.split(' ')          // turn input string into array
			var arArray = []                                // create array
			for (var i = 0; i < wordsArray.length; i++) {   // iterate through input array (that we created from input string with split)
				var newWord = wordsArray[i]                   // assign the current word the iteration is on to var newWord (easier to read)
				newWord = newWord.replace(newWord[0], 'r')    // replace first letter of every word with R
				arArray[i] = newWord                          // assign arArray with newWord that has every first letter replaced with R
			}
			return arArray.join(' ')                        // output arArray as a string instead of array
		}
	}
	return dog                                          // get var dog out of function for use
}


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

var pluck = function(objArray, prop) {
   var namesArray = []                                  // create empty array to push plucked names into
   for (var i = 0; i < objArray.length; i++) {          // iterate through length of input objArray
   var pluckedName = objArray[i][prop]                  // assign the current iteration on a particular prop to pluckedName value
   namesArray.push(pluckedName)                         // push pluckedName value to empty array
   }
   return namesArray                                    // output array for use
}

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.


// check test.js for examples of how this function should be used.

var getCounts = function(inputString) {
   var countObject = {}                                       // create empty object to store counts
    var inputArray = inputString.toLowerCase().split(/\W+/)   // eliminate instances of capitalization and punctuation
   for (var i = 0; i < inputArray.length; i++) {              // iterate through input text
       var counter = 0                                        // set word finder count to 0
       if (countObject[inputArray[i]] === undefined) {        // if instance of [i] isnt in defined object, proceed with code
            for (var j = 0; j < inputArray.length; j++) {     // iterate through input text again
                 if (inputArray[i] === inputArray[j]) {       // compare first iteration of words in text to second iteration of words in text
                     counter += 1                             // if algorithm finds identical words, increase counter by one
                }
                countObject[inputArray[i]] = counter          // put text and text count into object
           }
       }
   }
   return countObject                                         // output object for use
}

// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }

var reverseObject = function(inputObject) {
  var flippedObject = {}                      // create empty array for flipped elements
  for (var prop in inputObject) {               // iterate through properties of inputObject
      flippedObject[inputObject[prop]] = prop  // push flipped elements to flippedObject
  }
    return flippedObject                       // return flippedObject for future use
}


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var reverseAll = function(inputArray) {
    var reversedArray = []
    for (var i =0; i < inputArray.length; i++) {
 reversedArray.push(reverseObject(inputArray[i]))
    }
    return reversedArray
}

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]