var f2c = function(fahr) {
  return (fahr-32)*(5/9);
 };

var c2f = function(celc) {
  return (celc * 9/5) +32;
};

function Temperature(fahr) {
  var currentFahr = fahr;

  this.getFahr = function() {
    return currentFahr;
  };

  this.setFahr = function(_fahr) {
    currentFahr = _fahr;
    return currentFahr;
  }
}

Temperature.prototype.setCelcius = function(celc) {
  this.setFahr(c2f(celc));
}

Temperature.prototype.setFahrenheit = function(fahr) {
  this.setFahr(fahr);
}

Temperature.prototype.fahrenheit = function() {
  return this.getFahr();
}

Temperature.prototype.celcius = function() {
  return f2c(this.getFahr());
 }

