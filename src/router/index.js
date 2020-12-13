import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'
import Hi3 from '../components/Hi3.vue'
import Hi4 from '../components/Hi4.vue'
import Hi5 from '../components/Hi5.vue'
import About from '../views/About.vue'
import Parmas from '../components/Parmas.vue'
import Error from '../components/Error.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'Home',
    // components: {
    //   default:Home,
    //   left:Hi3,
    //   right:Hi4
    // }
    component:Home,


  //  alias:'/home' //不要在path为'/'中的是不会起作用的。不要这样写
  },
  {
    path:'/parmas/:newsId(\\d+)/:newsTitle',
    // path:'/parmas',
    component:Parmas,
    // beforeEnter: (to, from, next) => {  //在index.js中只可以写这个钩子
      
    //   console.log('我进入了params模板');
    //   console.log(to);
    //   console.log(from);
    //  // next(false);
    //  //next();
    //  //next(true);
    //  //next('/');
    //  next();//路由的跳转开关
    //}

  },
  {
    path:'/goParmas/:newsId(\\d+)/:newsTitle',
    redirect:'/parmas/:newsId(\\d+)/:newsTitle'
  },
  // {
  //   path: '/ZJW',
  //   name: 'Home',
  //   components: {
  //     default:Home,
  //     left:Hi4,
  //     right:Hi3
  //   }

  // },
  {
    path: '/about',
   // name: 'About',
   // component: () => import( '../views/About.vue'),
   component: About,
    children:[
      {path:'/',name:'About',component:About},
      {path:'Hi1',name:'hi1',component:Hi1},
      {path:'Hi2',name:'hi2',component:Hi2,alias:'/ZJW'}
    ]
    
  },
  {
    path:'/goback',
    redirect:'/'
  },
  {
    path:'*',
    component:Error
  }

]

const router = new VueRouter({
 // mode:'hash',//带#号
  mode:'history',  //#号就消除了
  routes
})

export default router
