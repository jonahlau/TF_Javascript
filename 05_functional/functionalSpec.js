describe("countWords", function() {
  it("counts words in a sentence separated by empty space", function() {
    expect(countWords("this is a sentence with 7 words")).toEqual(7);
  });
});


// functions that create functions
// makeAdder needs to return a function that closes over the parameter passed into makeAdder
describe("makeAdder", function() {
  it("takes an argument A and returns a function that adds A to any value it's passed", function() {
    adderOf2function = makeAdder(2);
    expect(adderOf2function(5)).toEqual(7);
  });

  // makeAdder(number) returns a function, that function can be directly called with ()
  it("works for a version of the syntax with function calling", function() {
    expect(makeAdder(5)(6)).toEqual(11);
  });
});


// functions that iterate over collections and perform some function

// the most basic, do something for each element of the collection
describe("forEach", function() {
  it("takes an array and an iterating function and runs the function for each element of the array", function() {
    runMeThreeTimes = jasmine.createSpy('forEach function');
    forEach([1,2,3], runMeThreeTimes);
    expect(runMeThreeTimes).toHaveBeenCalledWith(1);
    expect(runMeThreeTimes).toHaveBeenCalledWith(2);
    expect(runMeThreeTimes).toHaveBeenCalledWith(3);
  });
});

// map takes an array, performs a function on each element
// and returns and array with the result of that function
describe("map", function() {
  it("takes a doubling function and applies it to an array", function() {
    expect(map([1,2,3], function(elem) { return elem * 2;})).toEqual([2,4,6]);
  });

  it("takes a tripling function", function() {
    expect(map([1,2,3], function(elem) { return elem * 3; })).toEqual([3,6,9]);
  });
});

// filter takes a collection and a function and filters the collection using that function
// based on the boolean return value of the function
describe("filter", function() {
  var even_filter = function(element) {
    if(element % 2 === 0)
      return true;
    else
      return false;
  }; 

  it("filters an array based on evens", function() {
    expect(filter([1,2,3,4,5,6,7,8], even_filter)).toEqual([2,4,6,8]);
  });

  it("filters an array based on odds", function() {
    var odd_filter = function(element) {
      return !even_filter(element);
    };
    expect(filter([1,2,3,4,5,6,7,8], odd_filter)).toEqual([1,3,5,7]);
  });
});

// contains checks if a collection has an element that matches the second parameter's value
describe("contains", function() {
  it("should return true if a collection contains a user-specified value", function() {
    expect(contains([1,2,3], 2)).toEqual(true);
    expect(contains({moe:1, larry:3, curly:9}, 3)).toEqual(true);
  });

  it("should return false if a collection does not contain a user-specified value", function() {
    expect(contains([1,3,9], 2)).toEqual(false);
  });
});


// reduce takes an array and combines elements using some combination funcation
// you can imagine the reduction function eating two elements at a time and creating a new value
// then eating that new value with the next value in the array
describe("reduce takes an array, starting point, and combining function and", function() {
  it("sums up the array", function() {
    var add = function(a, b) {
      return a+b;
    };
    expect(reduce([3, 5, 7], 0, add)).toEqual(15);
  });

  it("counts the number of words in an array of strings", function() {
    word_array = ["hello there this is line 1", "and this is line 2"];
    expect(reduce(word_array, 0, countWordsInReduce)).toEqual(11);
  });
});

// Use reduce inside a sum function that takes an array of integers
describe("sums an array using reduce", function() {
  it("adds up an array and reduce is called", function() {
    spyOn(window, 'reduce').andCallThrough();
    expect(sum([1,2,3])).toEqual(6);
    expect(reduce).toHaveBeenCalled();
  });
});


describe("every", function() {
  var getValue = function(i) { return i; };
  var isEven = function(num) { return num % 2 === 0; };

  it("should handle an empty set", function() {
    expect(every([], getValue) ).toEqual(true);
  });

  it("should handle a set that contains only true values", function() {
    expect(every([true, true, true], getValue)).toEqual(true);
  });

  it("should handle a set that contains one false value", function() {
    expect(every([true, false, true], getValue)).toEqual(false);
  });

  it("should handle a set that contains even numbers", function() {
    expect(every([0, 10, 28], isEven)).toEqual(true);
  });

  it("should handle a set that contains an odd number", function() {
    expect(every([0, 11, 28], isEven)).toEqual(false);
  });
});

describe("any", function() {
  var isEven = function(number){
    return number % 2 === 0;
  };

  it("should handle the empty set", function() {
    expect(any([])).toEqual(false);
  });

  it("should handle a set containing 'false' values", function() {
    expect(any([false, false, false])).toEqual(false);
  });

  it("should handle a set containing one 'true' value", function() {
    expect(any([false, false, true])).toEqual(true);
  });

  it("should handle a set that contains all odd numbers", function() {
    expect(any([1, 11, 29], isEven)).toEqual(false);
  });

  it("should handle a set that contains an even number", function() {
    expect(any([1, 10, 29], isEven)).toEqual(true);
  });

});



/* Functions that decorate other functions.  These functions return a version of the function
   with some changed behavior. */

// Given a function, return a new function will only run once, no matter how many times it's called
describe("once", function() {
  it("should only increment num one time", function() {
    var num = 0;
    var increment = once(function() {
      num++;
    });
    increment();
    increment();

    expect(num).toEqual(1);
  });
});


// create a function called wrapper
// that is given a function and a wrapper function
// return a new function that calls the wrapper function, gives it the block function
// and yields to it from inside wrapper
describe("the wrapper (silly block nightmares)", function() {
  it("makes a function more polite", function() {
    var hello = function() { return "David"; };
    var newFunction = wrapper(hello, function(block) {
      return "My name is " + block() + ".  It's nice to meet you.";
    });
    expect(newFunction()).toEqual("My name is David.  It's nice to meet you.");
  });

});







