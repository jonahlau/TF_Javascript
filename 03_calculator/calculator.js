function Calculator() {
	
	this.count = 0;

	this.value = function() {
		return this.count;
	};

	this.add = function (number) {
		this.count += number;
		return this.count;
	};

	this.subtract = function (number) {
		this.count -= number;
		return this.count;
	};
}
