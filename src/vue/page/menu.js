import Vue from 'vue'
import MenuItem from '../components/MenuItem.vue'

let vm =new Vue({
    el:"#app",
    render:h=>h(MenuItem)
})