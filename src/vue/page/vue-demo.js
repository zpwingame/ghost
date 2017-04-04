import Vue from 'vue';
import Hello from '../components/Hello.vue'
import './vue-demo.scss'

let vm = new Vue({
	el:'#app',
	data:{
		name:'Tom',
	},
	components:{
		Hello:Hello
	}
})
