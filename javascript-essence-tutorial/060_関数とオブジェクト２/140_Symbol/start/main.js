const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(s === s2);

const str = new String('tom');
console.log(str);

String.prototype[s] = function() {
  return 'hello ' + this;
}

const tom = 'tom';
console.log(tom[s]())