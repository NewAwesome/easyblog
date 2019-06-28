import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/front/Home.vue'
import List from './views/front/List.vue'
import Detail from './views/front/Detail.vue'
import Admin from './views/admin/Admin.vue'
import Category from './views/admin/Category.vue'
import Content from './views/admin/Content.vue'
import User from './views/admin/User.vue'
import Add from './views/admin/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: 'home/list',
    children: [{
      path: 'list',
      name: 'list',
      component: List
    }, {
      path: 'detail',
      name: 'detail',
      component: Detail
    }]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [{
      path: 'user',
      name: 'user',
      component: User
    },
    {
      path: 'category',
      name: 'category',
      component: Category,
      children: [{
        path: 'add',
        name: 'category-add',
        component: Add
      }]
    },
    {
      path: 'content',
      name: 'content',
      component: Content,
      children: [{
        path: 'add',
        name: 'content-add',
        component: Add
      }]
    }
    ]
  }
  ]
})
