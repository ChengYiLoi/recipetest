import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import MainPage from "./components/MainPage.vue";
import RecipesPage from "./components/RecipesPage.vue";
Vue.config.productionTip = false;

Vue.use(Router);

const routes = [
  { path: "/", component: MainPage },
  { path: "/search=:id", component: RecipesPage },
];

const router = new Router({
  routes,
  mode: "history",
  props:true
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
