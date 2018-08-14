import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import Admin from '../components/admin/Admin'
import AddArticle from '../components/AddArticle.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/addarticle', component: AddArticle, name: 'AddArticle' },
  { path: '/admin', component: Admin, name: 'Admin' }
]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
