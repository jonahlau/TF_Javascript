function translate(word) {
	var pigla = "ay";
	var stringArray;
	
	var manyWords = function() {
		for (var i=0; i<stringArray.length; i++) {
			for (var j=0; j<stringArray[i].length; j++) {
				var temp = stringArray[i][j].toLowerCase();
				if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
	      break;
				} else {
					stringArray[i].push(stringArray[i].slice(j,j+1).join(""));
					delete stringArray[i][j];
				}
 			}
		}
    for (var k=0; k<stringArray.length; k++) {
      stringArray[k] = stringArray[k].join("") + pigla;
    }
    return stringArray.join(" ");
	};

	var oneWord = function() {
		for (var i=0; i<stringArray.length; i++) {
	  	var temp = stringArray[i].toLowerCase();
	  	if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
	      break;
	  	} else {
	  		stringArray.push(stringArray.slice(i,i+1));
	  		delete stringArray[i];
	  	}
		} 
		return stringArray.join("") + pigla;
	};
	
	if (word.indexOf(" ") == -1) {
		stringArray = word.split("");
		return oneWord();
	} else {
		stringArray = word.split(" ");
		for (var i=0; i<stringArray.length; i++) {
			stringArray[i] = stringArray[i].split("");
		}
		return manyWords();
	}
}