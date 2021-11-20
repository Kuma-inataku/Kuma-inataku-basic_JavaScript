import{ publicFn as fn, publicVal as val } from './moduleA.js';

fn();
console.log(val.prop++);
console.log(val.prop++);
fn();
