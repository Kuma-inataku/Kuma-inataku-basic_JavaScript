function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age){
  Person.call(this, name, age)
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log('konnichiwa' + this.name);
}
Japanese.prototype.bye = function() {
  console.log('sayounara' + this.name);
}
const taro = new Japanese('taro', 23);
console.log(taro);

taro.hello();
taro.bye();