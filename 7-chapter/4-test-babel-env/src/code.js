import 'core-js';

const p = Promise.resolve(10);
const obj = {
  a: 10,
  b: 20,
  c: 30,
};
const arr = Object.values(obj);
const exist = arr.includes(20);
