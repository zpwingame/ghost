import Vue from 'vue';
import $ from 'jquery';
import './vue-demo.scss'
import '/Users/zp/notes/mock/mock.js'

window.vm = new Vue({
	el:'#app',
	// template:`
	// `,
	data:{
		activeTab:"orderActive"
	},
	mounted:function(){
		console.log($);
		$.ajax({
			url:'http://localhost:3000/queryRefundableDish',
			type:'get',
			success:function(data){
				console.log(data);
			}
		})
	},
    components:{
    },
	methods:{
		changeTab(tab){
			if(tab==='order'){
				this.activeTab = 'orderActive';
			}else if(tab==='refund'){
				this.activeTab = 'refundActive';
			}
		},
		closePanel(){
			this.$destroy(true);
	      	this.$el.remove();
			console.log(123);
		}
	}
})
// document.body.appendChild(vm.$mount().$el)
