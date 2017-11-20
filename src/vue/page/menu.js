import Vue from 'vue'
import MenuItem from '../components/MenuItem.vue'
// import IscrollItem from '../components/IscrollItem.vue'

let vm =new Vue({
    el:"#app",
    render:h=>h(MenuItem)
})