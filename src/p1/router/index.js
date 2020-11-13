import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '../views/aboutUs'
import index from '../views/index'
import projectDetail from '../views/projectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/projectDetail',
      name: 'projectDetail',
      component: projectDetail,
      meta: {
        title: '项目详情'
      }
    },
  ]
})
