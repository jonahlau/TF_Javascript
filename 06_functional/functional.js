//Countwords

var countWords = function(string) {
	var counter = function(input) {
		var count = 0;
		for (var i=0; i<string.length; i++) {
			if (string.charAt(i) == " ") {
				count++;
			} 
		}
		return count+1;
	}
	return counter(string);
};

//makeAdder

var makeAdder = function(adder) {
	return function(adder2) {
		return adder + adder2;
	};
};


//forEach

var forEach = function(array, func) {
	for (var i=0; i<array.length; i++) {
		func(array[i]);
	}
};

//map

var map = function(array, func) {
	var output = [];
	for (var i=0; i<array.length; i++) {
		output.push(func(array[i]));
	}
	return output;
};

//filter

var filter = function(array, func) {
	var output = [];
	for (var i=0; i<array.length; i++) {
		if (func(array[i]) === true) {
			output.push(array[i]);
		} 
	}
	return output;
};

//contains

var contains = function(collection, specValue) {
	var array = [];
			if (typeof collection== "object") {
				for (key in collection) {
					array.push(collection[key]);
				}
			} else {
				array = collection;
			}

		for (var i=0; i<array.length; i++) {
			if (array[i] === specValue) {
				return true;
			} 
		}
		return false;
};

//reduce

var reduce = function(array, base, func) {
	for (var i=0; i<array.length; i++) {
		base = func(base, array[i]);
	}
	return base;
}

var add = function(a,b) {
	return a+b;
};

var sum = function(array) {
	return reduce(array,0,add);
};

var countWordsInReduce = function(base, string) {
	for (var i=0; i<string.length; i++) {
			if (string.charAt(i) == " ") {
				base++;
			} 
	}
	return base+1;
};

//every

var every = function(array, func) {

	for (var i=0; i<array.length; i++) {
		if (func(array[i]) === false) {
			return false;
		}
	}
	return true;
}

//any

var any = function(array,func) {
	if (func === undefined) {
		var func = function(value) {
			return value;
		}
	}
	
	for (var i=0; i<array.length; i++) {
		if (func(array[i])) {
			return true;
		}
	} 
	return false;
}

//once

function once(func) {
	var done = false;
	return function() {
		if (done === false) {
			done = true;
			func();
		}
	};
}

//wrapper

function wrapper(func, wrap) {
	return function() {
		return wrap(func);
	}
}


