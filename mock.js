var Mock = require('mockjs')
var data = {
  "string|1-10": "★"
}
// var testData = {
//     'list|1-10': [{
//         'id|+1': 1,
//         'email': '@EMAIL'
//     }]
// }
var list = {
    list:[{
        name:'sd',
        age:'sd',
        height:'sd',
        wight:'sd'
        }
    ],
    day:10
}
Mock.mock(/getData/,list)
Mock.mock(/test/,data)
