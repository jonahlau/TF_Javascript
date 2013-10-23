describe("makeAdder", function() {
  it("takes an argument and returns a function that adds that argument", function() {
    adderOf2 = makeAdder(2);
    expect(adderOf2(5)).toEqual(7);
  });

  it("works for this crazy version of the syntax", function() {
    expect(makeAdder(5)(6)).toEqual(11);
  });
});


describe("forEach", function() {
  it("takes an array and function and runs the function for each element of the array", function() {
    runMeThreeTimes = jasmine.createSpy('forEach function');
    forEach([1,2,3], runMeThreeTimes);
    expect(runMeThreeTimes).toHaveBeenCalledWith(1);
    expect(runMeThreeTimes).toHaveBeenCalledWith(2);
    expect(runMeThreeTimes).toHaveBeenCalledWith(3);
  });
});

describe("countWords", function() {
  it("counts words in a sentence separated by empty space", function() {
    expect(countWords("this is a sentence with 7 words")).toEqual(7);
  }); 
});

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


describe("map", function() {
  it("takes a doubling function and applies it to an array", function() {
    expect(map([1,2,3], function(elem) { return elem * 2})).toEqual([2,4,6]);
  });

  it("takes a tripling function", function() {
    expect(map([1,2,3], function(elem) { return elem * 3})).toEqual([3,6,9]);
  });
});

describe("filter", function() {
  var even_filter = function(element) {
    if(element % 2 == 0)
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



// this is a test of silly block ideas, create a function called wrapper
// that is given a function and a wrapper function
// return a new function that calls the wrapper function, gives it the block function
// and yields to it from inside wrapper
describe("the wrapper (silly block nightmares)", function() {
  it("makes a function more polite", function() {
  var hello = function() { return "David" };
  var newFunction = wrapper(hello, function(block) {
    return "My name is " + block() + ".  It's nice to meet you.";
  });
  expect(newFunction()).toEqual("My name is David.  It's nice to meet you.");
  });

});







