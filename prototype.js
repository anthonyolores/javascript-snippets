//function object constructor
function Car(brand, model, color){
  this.brand = brand;
  this.model = model;
  this.color = color;
}
var toyotaCar = new Car('toyota', 'land cruiser', 'white',);
console.log(toyotaCar);
//add property to Car object
Car.prototype.engine = '';
toyotaCar.engine = 'V8';
console.log(toyotaCar);
//add function object property to Car object
Car.prototype.getCarDetails = function(){
  return `${this.brand} ${this.model} ${this.engine} ${this.color}`
};
console.log(toyotaCar.getCarDetails());