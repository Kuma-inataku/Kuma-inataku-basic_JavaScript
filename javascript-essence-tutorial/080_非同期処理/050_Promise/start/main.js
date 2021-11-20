new Promise(function(resolve, reject){
  console.log('promise');
  setTimeout(function(){
    reject('bye');
    // resolve('hello');
  } ,2000)
  // resolve('hello');
}).then(function(data){
  console.log('then:' + data);
  // throw new Error();
  return data;
}).then(function(data){
  console.log('then:' + data);
  return data;
}).catch(function(data){
  console.log('catch:' + data);
}).finally(function(){
  console.log('finally:')
})

console.log('global end')