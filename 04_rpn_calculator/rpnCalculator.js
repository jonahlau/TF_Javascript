function Calculator() {

	this.pushed = [];
	this.popped = [];
	this.count = undefined;

	//shortening property names: assign global variables to properties
	var pushed = this.pushed;
	var popped = this.popped;
	var count = this.count;

	this.value = function() {
		return count;
	};

	this.push = function(number) {
		pushed.push(number);
	};

	this.plus = function() {
		
		//loops to transfer last 2 elements in "pushed" array to "popped" array   
		if (pushed.length < 2) {
			throw new Error ("calculator is empty");
		}

		for (var i=0; i < 2; i++) {
			popped.push(pushed.pop());
		}

		//adds two elements present in "popped" and push to "pushed" array
		pushed.push(popped[1] + popped[0]);

		//and then remove both elements from "popped"
		popped.splice(0, 2);

		//assign last element in "pushed" array to value of this.count


		count = pushed[pushed.length-1];
		return count;
	};


	this.minus = function() {
		
		if (pushed.length < 2) {
			throw new Error ("calculator is empty");
		}

		for (var i=0; i < 2; i++) {
			popped.push(pushed.pop());
		}

		pushed.push(popped[1] - popped[0]);

		popped.splice(0,2);
		
		count = pushed[pushed.length-1];
		return count;

	};
 

	this.times = function() {
		if (pushed.length < 2) {
			throw new Error ("calculator is empty");
		}

		for (var i=0; i < 2; i++) {
			popped.push(pushed.pop());
		}

		pushed.push(popped[1] * popped[0]);

		popped.splice(0,2);

		count = pushed[pushed.length-1];
		return count;
	};

	this.divide = function() {
		
		if (pushed.length < 2) {
			throw new Error ("calculator is empty");
		}

		for (var i=0; i < 2; i++) {
			popped.push(pushed.pop());
		}

		pushed.push(popped[1] / popped[0]);

		popped.splice(0,2);

		count = pushed[pushed.length-1];
		return count;
	};
}