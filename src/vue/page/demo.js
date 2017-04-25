import Vue from 'vue';
import Hello from '../components/Hello.vue'
import Bottom from '../components/Bottom.vue'
import './vue-demo.scss'
import db from './db.json'

console.log(db)

let vm = new Vue({
	el:'#app',
	data:{
		flowerList:''
	},
	components:{
		Hello:Hello,
		Bottom:Bottom
	},
	created:function(){
		let list = [];
		let item = db.flowerList;
		for(let i = 0;i<1000;i++){
			list = list.concat(item)
		}
		this.$data.flowerList = list;
		console.log(performance.now());
	},
	mounted:function(){
		console.log(performance.now());
	}
})
console.log(vm.name)
// vm.$data.flowerList = db.flowerList;
console.log(vm.flowerList.length)
