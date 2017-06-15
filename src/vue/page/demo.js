import Vue from 'vue';
import TnItem from '../components/tn-item.vue'
import TnSlider from '../components/tn-slider.vue'
// import './vue-demo.scss'


window.vm = new Vue({
	el:'#app',
	data:{
        value:''
	},
	mounted:function(){
		console.log(performance.now());
	},
    components:{
        'tn-item':TnItem,
        'tn-slider':TnSlider
    }
})
