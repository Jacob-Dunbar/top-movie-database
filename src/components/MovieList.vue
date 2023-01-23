<template>
  <section class="movie-list">
    <header>
      <h1>Top Movies</h1>
      <button @click="$store.commit('sortByTitle')">title</button>
      <button @click="$store.commit('sortByRank')">rank</button>
    </header>
    <!-- <h2>{{ $store.state.top250[0].title }}</h2> -->
    <main class="list">
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
          <span class="/10">/ 10</span>
        </div>
      </div>
    </main>
  </section>
</template>

<script></script>

<style scoped>
section.movie-list {
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

.list {
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-card {
  width: 100%;
  background: gray;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.rank {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  background: white;
  width: 35px;
  height: 35px;
}

img {
  margin: 5px;
}

.copy {
  padding: 5px;
}

.title {
  margin-bottom: 5px;
}

.star {
  margin-right: 5px;
}

.rating {
  font-size: 2rem;
  margin-right: 5px;
}

@media (min-width: 540px) {
  .copy {
    width: 66%;
    padding-left: 25px;
  }
  .rank {
    position: static;
    background: none;
    font-size: 2.5rem;

    width: 55px;
    height: 55px;
    flex-grow: 1;
  }

  .movie-card {
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
  }
}
</style>
