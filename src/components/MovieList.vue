<template>
  <section>
    <header>
      <h1>Top Movies</h1>
      <button @click="$store.commit('sortByTitle')">title</button>
      <button @click="$store.commit('sortByRank')">rank</button>
    </header>
    <!-- <h2>{{ $store.state.top250[0].title }}</h2> -->
    <main>
      <div
        v-if="$store.state.top250.length"
        v-for="movie in $store.state.top250"
        key="movie.id"
        class="movie-card"
      >
        <h3 class="rank">{{ movie.rank }}</h3>
        <img :src="movie.image" />
        <div class="copy">
          <RouterLink :to="{ name: 'movieDetails', params: { id: movie.id } }"
            ><h2 class="title">{{ movie.title }}</h2></RouterLink
          >

          <v-icon scale="1.25" class="star" name="bi-star-fill" />
          <span class="rating">{{ movie.imDbRating }}</span>
          <span>/ 10</span>
        </div>
      </div>
    </main>
  </section>
</template>

<script></script>

<style scoped>
section {
  width: 100%;
}

header {
  width: 100%;
  background: gray;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

header h2 {
  font-size: 1.25rem;
}

header button {
  padding: 5px 10px;
}

main {
  margin: 0 15px;
}

.movie-card {
  width: 100%;
  background: gray;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.movie-card .rank {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  background: white;
  width: 35px;
  height: 35px;
}

.movie-card img {
  margin: 5px;
}

.copy {
  padding: 5px;
}

.copy .title {
  margin-bottom: 5px;
}

.copy .star {
  margin-right: 5px;
}

.copy .rating {
  font-size: 2rem;
  margin-right: 5px;
}
</style>
