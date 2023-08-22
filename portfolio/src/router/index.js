import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import About from '../views/About'
import SignUp from '@/views/SignUp'
import LogIn from '@/views/LogIn'
import Account from '@/views/Account'
import Project from '@/views/Project'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
       name: 'projects',
      component: Projects,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/log-in',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/projects/:id/:title',
      name: 'Project',
      component: Project
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router