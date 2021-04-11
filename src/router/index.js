import Vue from "vue";
import VueRouter from "vue-router";
import Tabs from "../views/Tabs.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
