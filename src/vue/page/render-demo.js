import Vue from 'vue'
import Hello from '../components/Hello.vue'


Vue.component('render-element', {
    render: function(createElement) {
        return createElement(
            'div', // tag name
            ['hello' ,'world'] // array of children
        )
    }
})
Vue.component('render-template-list',{
    template:`
    <ul v-if="items.length">
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
    <p v-else>No items found.</p>
    `,
    data:function(){
        return {
            items:[{
                name:'Tom'
            },{
                name:"Jerry"
            }]
        }
    }
})
Vue.component('render-list', {
    data:function(){
        return {
            items:[{
                name:'Tom'
            },{
                name:"Jerry"
            }]
        }
    },
    render: function(createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function(item) {
                return createElement('li', item.name)
            }));
        } else {
            return createElement('p', 'No items found.')
        }
    }
})


Vue.component('jsx-syntax', {
    data:function(){
        return {
            items:[{
                name:'Tom'
            },{
                name:"Jerry"
            }]
        }
    },
    render(h){
        return (
            <div>
                { this.items.length > 0 ?
                    <Hello></Hello>
                    :'empty'
                }
                <div>it uses JSX </div>
            </div>
        )
    }
})

let vm = new Vue({
    el: "#app",
    data: {
    }
})
