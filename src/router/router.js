import Vue from "vue";
import Router from "vue-router";
import routes from "@/router/routes.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: routes
});

export default router;
