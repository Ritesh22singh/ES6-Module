// ES6 Module: An external file that contains resuable code that can be
//             imported into other Javascript files.
//             Can contain varibale, classess, function.....and more
//             Introduction as part of ECMAScript 2015 update.

import {
  PI,
  getCircumference,
  getArea,
  getArea,
  getVolume,
} from "./module.mjs";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
