var Mock = require('mockjs')
var $ = require('jquery')
Mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})
$.ajax({
    url: 'hello.json',
    dataType: 'json'
}).done(function(data, status, jqXHR){
    $('<pre>').text(JSON.stringify(data, null, 4))
        .appendTo('body')
})
