import Vue from 'vue'

let bus = new Vue();

Vue.component('my-component', {
    template: `<h1
     @click='eat()'>click me</h1>`,
    props: ['name', 'age'],
    methods: {
        eat: function() {
            bus.$emit('id-selected');
        }
    }
})

Vue.component('my-component1', {
    template: `
	<div>
	<h1 @click='eat($event)'>click me</h1>
	<slot>
	<p>inner slot</p>
	</slot>
	<slot name='header'>
		<div class='header'>header slot</div>
	</slot>
	<slot name='center'>
		<div class='center'>center slot</div>
	</slot>
	</div>
	`,
    props: ['name', 'age'],
    methods: {
        eat: function(e) {
            console.log(e.target.innerHTML);
        }
    },
    mounted: function() {
        bus.$on('id-selected', function(id) {
            console.log('get data by $on')
        })
    }
})

Vue.component("component-demo", {
    template:`
    <div>
    <p>component-demo total is {{total}}</p>
    <div>
    <input type="button" value='increment' @click="incrementss()"/>
    </div>
    </div>
    `,
    data:function(){
        return{
            total:0
        }
    },
    props: {
        propA: Number,
        propB: {
            type: String,
            required: true,
            default: "hello"
        },
        propC: [String, Number]
    },
    methods:{
        incrementss:function(){
            this.$emit('increment');
            this.total +=1;
        }
    },
    mounted:function(){
    }
})


Vue.directive('bgc',{
        bind: function () {},
        inserted: function (el) {
            el.style.background = 'green';
        },
        update: function () {},
        componentUpdated: function () {},
        unbind: function () {}
})

window.vm = new Vue({
    el: '#app',
    data: {
        name: 'Tom',
        tt:{
            name:'123',
            data:[1,2,3]
        },
        color: 'Blue',
		currentView:'con1',
        rawHtml:'<span>span</span>',
        total:0
    },
    methods: {
        eat: function() {
            console.log(123)
        },
        incrementTotal:function(){
            this.total+=1;
            console.log('total is' +this.total);
        }
    },
    watch:{
        name:function(newValue,oldValue){
            console.log('new value is' + newValue+'and old value is'+oldValue)
        },
        'tt.name':function(newValue,oldValue){
            console.log('new value is' + newValue+'and old value is'+oldValue)
        }
    },
    computed: {
        computedName: function() {
            return this.name + 'and Jerry'
        }
    },
    filters: {
        toLowerCase: function(v) {
            return v.toLowerCase();
        }
    },
    components: {
        con1: {
            template: '<div>con1</div>'
        },
        con2: {
            template: '<div>con2</div>'
        },
        con3: {
            template: '<div>con3</div>'
        }
    }
})
