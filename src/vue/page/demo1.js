import Vue from 'vue'

let bus = new Vue();

Vue.component('my-component', {
    template: "<h1 @click='eat()'>click me</h1>",
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
    template:'<p>component-demo</p>',
    props: {
        propA: Number,
        propB: {
            type: String,
            required: true,
            default: "hello"
        },
        propC: [String, Number]
    },
    mounted:function(){
    }
})


Vue.directive('bgc',{
	inserted:function(el){
		el.style.background = 'green';
	}
})

let vm = new Vue({
    el: '#app',
    data: {
        name: 'Tom',
        color: 'Blue',
		currentView:'con1',
        rawHtml:'<span>span</span>'
    },
    methods: {
        eat: function() {
            console.log(123)
        }
    },
    computed: {
        computedName: function() {
            return this.name + 'and Cherry'
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
