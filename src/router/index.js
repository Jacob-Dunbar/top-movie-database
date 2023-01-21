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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
