import Vue from "vue";
import VueRouter from "vue-router";
import Tabs from "../views/Tabs.vue";
import Home from "../views/Home.vue";
import Modal from "../components/Modal.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
import Carousel from "../components/Carousel.vue";
import DropDown from "../components/DropDown.vue";
import Calender from "../components/Calender.vue";
import Table from "../components/Table.vue";
import Skeleton from "../components/Skeleton.vue";
import Progress from "../views/Progress.vue";

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
  {
    path: "/breadcrumb",
    name: "BreadCrumb",
    component: BreadCrumb,
  },
  {
    path: "/dropdown",
    name: "DropDown",
    component: DropDown,
  },
  {
    path: "/progress",
    name: "Progress",
    component: Progress,
  },
  {
    path: "/skelteon",
    name: "Skeleton",
    component: Skeleton,
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/calender",
    name: "Calender",
    component: Calender,
  },
  // {
  //   path: "/tabs",
  //   name: "Tabs",
  //   component: Tabs,
  // },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
];
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
