window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person)

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name, hoge) {
    console.log('hello ' + name)
    console.log('hello ' + hoge)
}

// b()

// const b = a.bind(null, 'Tim')
const b = a.bind(null, 'Tim', 'hoge')
// const b = a.bind('Tim')

b()