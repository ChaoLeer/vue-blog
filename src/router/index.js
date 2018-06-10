import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/views/Main')
const Article = () => import('@/views/Article')
const About = () => import('@/views/About')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
