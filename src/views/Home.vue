<template>
  <div class="home">
    <Navbar />
    <Header />
    <MovieList />
    <h1>Home</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import MovieList from "../components/MovieList.vue";
export default {
  name: "Home",
  components: { Navbar, Header, MovieList },
};
</script>
