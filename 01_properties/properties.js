var object = {};

function setSomePropertiesOn(object) {
	object.x = 7;
	object.y = 8;
	object.onePlus = function(z) {
		return z + 1;
	};
	
}