import Vue from 'vue'
import Home from '../components/Home.vue'
// import IscrollItem from '../components/IscrollItem.vue'

let vm =new Vue({
    el:"#app",
    render:h=>h(Home)
})