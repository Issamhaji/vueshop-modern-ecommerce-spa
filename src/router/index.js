import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import LoginPage from "@/views/LoginPage.vue";
import store from "../stores/index.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {requireUnAuth: true}
    }

  ]
});

router.beforeEach(function(to,from,next){
  if(to.meta.requireUnAuth && store.getters['auth/isAuth']){
    next('/');
  }else{
    next();
  }
})

export default router
