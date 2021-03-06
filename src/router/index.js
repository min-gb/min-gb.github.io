import Vue from "vue"
import VueRouter from "vue-router"
import MyHome from "@/views/MyHome"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MyHome",
    component: MyHome
  },
  {
    path: "/vuejs-components",
    name: "VuejsComponents",

    component: () =>
        import(/* webpackChunkName: "vuejs-components" */ "../views/VuejsComponents.vue")
  }

];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
