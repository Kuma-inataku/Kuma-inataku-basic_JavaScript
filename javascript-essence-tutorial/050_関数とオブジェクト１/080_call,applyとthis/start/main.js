function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'}

const b = a.bind(tim);
b();

a.apply(tim, ['Tim', 'Bob'])
a.call(tim, 'Tim', 'Bob')

const array = [1, 2, 3, 4, 5];

Math.max(1,2)
const result = Math.max(...array)
// const result = Math.max.apply(null, array)

console.log(result)