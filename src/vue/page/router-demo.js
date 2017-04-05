import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Home = { template: '<div><h2>Home</h2></div>' }
const About = { template: '<div><h2>About</h2></div>' }
const Users = {
  template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}

const User = { template: '<div>{{ $route.params.username }}</div>' }


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/users', component: Users,
      children: [
        { path: ':username', name: 'user', component: User }
      ]
    }
  ]
})

let vm = new Vue({
  router,
  template: `
    <div id="app">
        <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/users">users</router-link></li>
        <li><router-link to="/users/Tom">/users/Tom</router-link></li>
        </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
