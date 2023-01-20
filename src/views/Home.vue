<template>
  <div class="home">
    <Header />
    <MovieList />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MovieList from "../components/MovieList.vue";
export default {
  name: "Home",
  components: { Header, MovieList },
};
</script>
