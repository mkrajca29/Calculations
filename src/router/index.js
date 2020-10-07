import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calculation from "../views/Calculation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/calculation",
    component: Calculation
  }
];

const router = new VueRouter({
  routes
});

export default router;
