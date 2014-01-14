describe("Mammal class", function() {
  beforeEach(function() {
    myMammal = new Mammal("Joe");
  });

  it("should take name in its constructor", function() {
    expect(myMammal.name).toEqual("Joe");    
  });

  it("should have an array called offspring", function() { 
    expect(myMammal.offspring).toEqual([]);    
  });

  it("should have a sayHello function", function() {
    expect(myMammal.sayHello()).toEqual("My name is Joe, I'm a Mammal");
  });

  it("should have a haveBaby function", function() {
    child = myMammal.haveBaby()
    expect(child.name).toEqual("Baby Joe");
    expect(myMammal.offspring).toEqual([child]);
  });
});

describe("Cat class", function() {
  beforeEach(function() {
    cat = new Cat("Stewart", "Tabby");  
  });

  it("should have a name, color in its constructor", function() {
    expect(cat.name).toEqual("Stewart");
    expect(cat.color).toEqual("Tabby");
  });

  it("should have an array called offspring from the Mammal constructor", function() {
    expect(cat.offspring).toEqual([]);
  });

  it("should inherit all methods from Mammal", function() {
    expect(typeof Cat.prototype.haveBaby).toEqual("function");
    expect(Cat.hasOwnProperty('toString')).toEqual(false);
  });

  it("should have it's own haveBaby method that takes only a color", function() {
    green_cat = cat.haveBaby("green");
    expect(cat.offspring).toEqual([green_cat]);
    expect(green_cat.name).toEqual("Baby Stewart");
    expect(green_cat.color).toEqual("green");
  });
});
