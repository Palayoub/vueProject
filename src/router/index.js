import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/components/Home'
import Admin from '@/components/admin/Admin'
import Article from '@/components/Article'

Vue.use(Router)

const routes = [
  { path: '/ok', component: Home, name: 'Home' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/addarticle', component: Article, name: 'Article' },
  { path: '/admin', component: Admin, name: 'Admin' }
]

export default new Router({
  routes : [
    { path: '/Home', component: Home, name: 'Home' },
    { path: '/Article', component: Article, name: 'Article' },
    { path: '/Admin', component: Admin, name: 'Admin' }
  ]
});


