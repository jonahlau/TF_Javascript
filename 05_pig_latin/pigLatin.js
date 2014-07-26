// http://repl.it/TtO/1
function translate(wordString){
 
// create a string of all of our possible vowels
var vowel = 'aeiou';
// make an array of individual words from the input string
var wordArr = wordString.split(' ');
 
var wordArray = []; // empty word array to store pigLatin words
var index = 0; // creates a 'pointer' to where we are in each word
 
// begin looping over each individual word in our array; .forEach is shorthand for a for // loop ex: for (var i = 0; i < something.length; i ++) == forEach (there are some small differences)
    wordArr.forEach(function(word){
    // it's syntatically pleasing to use forEach here b/c i can name the parameter 'word' instead of having something like wordArr[i].
    // loop over each individual letter in an individual word
    for(var i =0; i< word.length; i++){
    // The search() method searches a string for a specified value, and returns the position of the match.
    // Research how the search() method works.
		// This method returns -1 if no match is found.
		// First I check for a vowel
        if(vowel.search(word[i]) !==-1){
        	// QU CHECK HERE as long as the vowel isn't u OR (||) if the vowel is u and the letter before it isn't 'q' (checking for qu); get the index set the index and break out of the for loop.
        	// ** We used a traditional for loop here b/c you can't use break statements in a .forEach loop.
            if(word[i] !== 'u' || (word[i] === 'u' && word[i - 1] !== 'q')){
                index = i;
                break;
            }
        }
    }
 
    // The substring() method returns a subset of a string between one index and another, or through the end of the string.
 
    // Look up on how the substring method works
    // here we have an index value (in this case a starting value). All we do is concatenate parts of the string together.
    
    // Open your chrome dev tools when you run your test (at localhost:7357 when you run testem);
    // Go to the js console and look at the console.log statements that apper. Comment out tests so you don't have every test running
    // you can read the console.log statements much easier w/o all the tests running.
 
    wordArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
                   console.log("first :" + word.substring(index, word.length));
                   console.log("second :"+ word.substring(0, index));
                   console.log("ay");
                   console.log("final :"+ word.substring(index, word.length) + word.substring(0, index) + 'ay');
                   console.log("------");
  });
  return wordArray.join(' ');
}