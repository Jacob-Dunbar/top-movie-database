<template>
  <div class="home">
    <Header />
    <MovieList />
    <TrailerModal v-if="$store.state.showTrailerModal" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MovieList from "../components/MovieList.vue";
import TrailerModal from "../components/TrailerModal.vue";
export default {
  name: "Home",
  components: { Header, MovieList, TrailerModal },
};
</script>
