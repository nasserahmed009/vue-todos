import Vue from "vue";
import Router from "vue-router";
import routes from "@/router/routes.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: routes
});

// update the page title on chnaging the route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
