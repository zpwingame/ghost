import Vue from 'vue';
import Hello from '../components/Hello.vue'
import Bottom from '../components/Bottom.vue'
import './vue-demo.scss'
import db from './db.json'

console.log(db)

let vm = new Vue({
	el:'#app',
	data:{
		name:'Tom',
		flowerList:''
	},
	components:{
		Hello:Hello,
		Bottom:Bottom
	}
})
vm.$data.flowerList = db.flowerList;
