import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetails from "../views/movie/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movieDetails",
    component: MovieDetails,
    props: true,
  },
];

const layoutId = document.getElementById("layout-scroll-container");

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
