var $ = require('jquery')
console.log(123);
import './mock.js'
$.ajax({
    url: '/getData',
    dataType: 'json'
}).done(function(data, status, jqXHR){
    $('<pre>').text(JSON.stringify(data, null, 4))
        .appendTo('body')
})

$.ajax({
    url: '/test',
    dataType: 'json'
}).done(function(data, status, jqXHR){
    $('<pre>').text(JSON.stringify(data, null, 4))
        .appendTo('body')
})
