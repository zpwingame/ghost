
// require.ensure([], function(require){
//     var show = require('./lib/c');
//     show();
// });
import { square } from './lib/a.js'
function print(value){
    console.log(value);
}
print(square(2));

var jquery = require('jquery');
console.log(jquery);
// exports.$ = jquery;
// console.log(module);
