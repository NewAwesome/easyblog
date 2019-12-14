import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/front/Home.vue'
import List from './views/front/List.vue'
import Detail from './views/front/Detail.vue'
import Admin from './views/admin/Admin.vue'
import Category from './views/admin/Category.vue'
import Content from './views/admin/Content.vue'
import User from './views/admin/User.vue'
import AddCat from './views/admin/AddCat.vue'
import AddCon from './views/admin/AddCon.vue'
import EditCat from './views/admin/EditCat.vue'
import EditCon from './views/admin/EditCon.vue'
import Index from './views/admin/Index.vue'

import Test from './views/test/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: 'home/list/-1',
      children: [
        {
          path: 'list/:id',
          name: 'list',
          component: List
        },
        {
          path: 'detail',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: 'admin/index',
      children: [
        {
          path: 'user',
          name: 'user',
          component: User
        },
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          children: [
            {
              path: 'addCat',
              name: 'category-add',
              component: AddCat
            },
            {
              path: 'editCat',
              name: 'category-edit',
              component: EditCat
            }
          ]
        },
        {
          path: 'content',
          name: 'content',
          component: Content,
          children: [
            {
              path: 'addCon',
              name: 'content-add',
              component: AddCon
            },
            {
              path: 'editCon',
              name: 'content-edit',
              component: EditCon
            }
          ]
        }
      ]
    },
    // 测试
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
