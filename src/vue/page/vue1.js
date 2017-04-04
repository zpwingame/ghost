import React from 'react';
import ReactDom from 'react-dom'
import Vue from 'vue';
import Hello from '../components/Hello.vue'

let vm = new Vue({
	el:'#app',
	data:{
		name:'jacka'
	},
	components:{
		Hello:Hello
	}
})
