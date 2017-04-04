import React from 'react';
import ReactDom from 'react-dom'
import Vue from 'vue';
import Hello from '../components/Hello.vue'
import './vue-demo.scss'

let vm = new Vue({
	el:'#app',
	data:{
		name:'sss'
	},
	components:{
		Hello:Hello
	}
})
