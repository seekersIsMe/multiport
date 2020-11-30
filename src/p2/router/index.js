import Vue from 'vue'
import Router from 'vue-router'
const aboutUs = () => import(/* webpackChunkName: "aboutUs" */ '../views/aboutUs')
const index = () => import(/* webpackChunkName: "index" */ '../views/index')
const projectDetail = () => import(/* webpackChunkName: "projectDetail" */ '../views/projectDetail')

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
    }
  ]
})
