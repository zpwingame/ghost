<template lang="html">
	<div class="">
		<div class="" v-for='item in shops'>
			sfljl
			<span @click='click(item)'>sdfsd{{item.checked}}</span>
			<span @click='click()'>{{item.age}}</span>
			<span @click='click()'>{{item.height}}</span>
		</div>
		<input type="button" name="" value="" @click='click()'>
	</div>
</template>

<script>
import bus from './bus.js';
// console.log(this.A)
export default {
	// template:'<div>hello</div>',
	data:function(){
		return {
			greeting:'hello',
			shops:[{
				name:'',
				age:'',
				height:'',
				checked:''
			}]
		}
	},
	mounted:function(){
		bus.$on('change', (data) => {
			console.log(data)
		})
		// console.log(this.$parent)
		this.shops = [
			{name:'zp',age:10,height:'174'},
			{name:'zp',age:10,height:'174'},
			{name:'zp',age:10,height:'174'},
			{name:'zp',age:10,height:'174'}
		]
		this.shops.map(item=>{
			item.checked ="ppp";
		})
	},
	methods:{
		click:function(item){
			item.checked='aaa'
			console.log(item.checked);
		}
	}
}
</script>

<style lang="css">
</style>
