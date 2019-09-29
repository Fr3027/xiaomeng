import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import FleaMarket from "./views/FleaMarket.vue";
import LostAndFound from "./views/LostAndFound.vue";
Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/flea",
      name: "flea",
      component: FleaMarket
    },
    {
      path: "/LostAndFound",
      name: "LostAndFound",
      component: LostAndFound
    }
  ]
});
