// import Vue from 'vue';
// import $ from 'jquery';
// import './vue-demo.scss'
// // import '/Users/zp/notes/mock/mock.js'
//
// window.vm = new Vue({
// 	el:'#app',
// 	// template:`
// 	// `,
// 	data:{
// 		activeTab:"orderActive"
// 	},
// 	mounted:function(){
// 		console.log($);
// 		$.ajax({
// 			url:'http://localhost:3000/queryRefundableDish',
// 			type:'get',
// 			success:function(data){
// 				console.log(data);
// 			}
// 		})
// 	},
//     components:{
//     },
// 	methods:{
// 		changeTab(tab){
// 			if(tab==='order'){
// 				this.activeTab = 'orderActive';
// 			}else if(tab==='refund'){
// 				this.activeTab = 'refundActive';
// 			}
// 		},
// 		closePanel(){
// 			this.$destroy(true);
// 	    	this.$el.remove();
// 			console.log(123);
// 		}
// 	}
// })
// // document.body.appendChild(vm.$mount().$el)
// require('core-js/es6/map');
// let map= new Map();
// map.set('foo',123);
//

var jsonp = require('jsonp');

jsonp('http://api.map.baidu.com/geocoder/v2/?ak=EDbaac610a111b8cdf7886a1118d87c6&location=30.548397,104.04701&output=json&pois=1', null, function (err, data) {
  if (err) {
    console.error(err.message);
  } else {
    console.log(data);
  }
});
