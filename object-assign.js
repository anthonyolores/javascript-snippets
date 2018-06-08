const object1 = {
  a: 1,
  b: 2,
  c: 3
};
//copy object properties of object1(source) to {c: 5, d:5} the destination
//if there's existing key in the destination object, it will be overwritten from source' property
//@return the new destination object
const object2 = Object.assign({c: 4, d: 5}, object1); //(destination, source)
// expected output: 3 5
console.log(object2.c, object2.d); 

//Mergin objects
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed

