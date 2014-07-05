function repeat(input, number) {
		var outputString = "";
		for (var i=0; i < number; i++) {
			outputString += input;
		}
		return outputString;
}

function join(array, delimiter) {
	var output = "";
		if (delimiter == undefined) {
			for (var i=0; i<array.length; i++) {
				output = output + array[i];
			}
			return output;
		} else {
			for (var i=0; i<array.length-1; i++) {
				output = output + array[i] + delimiter;
			}
			output = output + array[array.length-1];
			return output;
		}
}

function sum(array) {
	var output = 0;
	for (var i=0; i<array.length; i++) {
		output += array[i];
	}
	return output
}

function paramify(object) {
	var tempString = "";
	var tempArray = [];
	for (key in object) {
		if (object.hasOwnProperty(key)==true) {
		tempArray.push(String(key + "=" + object[key]))
		}
	}
	tempArray.sort();
	return tempArray.join('&');
}

function factorial(number) {
	var output = 1;
	while (number > 0) {
		output *= number;
		number --;
	}
	return output;
}

function concat_string() {
	var output = "";
	for (var i=0; i < arguments.length; i++) {
		output += arguments[i];
	}
	return output;
}




