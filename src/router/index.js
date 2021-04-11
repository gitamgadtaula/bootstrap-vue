import Vue from "vue";
import VueRouter from "vue-router";
import Tabs from "../views/Tabs.vue";
import Home from "../views/Home.vue";
import Modal from "../components/Modal.vue";

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
  {
    path: "/modal", 
    name: "Modal",
    component: Modal,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
