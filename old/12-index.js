// Деструктуризация массивов
const cities = null; //['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];
const [m = 'Madrid', a = 'Amsterdam', p = 'Paris', ...tail] = cities || [];
console.log(m, a, p, tail);

const numbers =null;// [1, 2, 3, [4, 5], 10, 14];
const [a1 = 0, b = 0, c = 0, [d = 1, f = 1] = [] , g = 0, h = 0] = numbers || [];
console.log(a1, b, c, d, f, g, h);

let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(y, x);



    