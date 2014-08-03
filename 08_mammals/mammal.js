var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
};

Mammal.prototype.sayHello = function() {return "My name is " + this.name + ", I'm a Mammal"};

Mammal.prototype.haveBaby = function() {
    var child = new Mammal("Baby " + this.name);
    this.offspring.push(child);
    return child;
    };

var Cat = function(name, color) {
  this.name = name; //can also do Mammal.call(this, name);
  this.color = color;
};

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color) {
  var child = new Cat
};


Cat.prototype.haveBaby = function(color) {
    var kitten = Mammal.prototype.haveBaby.call(this);
    kitten.color = color;
    return kitten;
};