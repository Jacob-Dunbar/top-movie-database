<template>
  <section class="movie-list">
    <h1 class="section-heading">Top 250 Movies</h1>
    <div class="sorting-buttons">
      <button @click="$store.commit('sortByTitle')">sort by title</button>
      <button @click="$store.commit('sortByRank')">sort by rank</button>
    </div>
    <main class="grid" v-if="$store.state.top250.length">
      <RouterLink
        v-for="movie in $store.state.top250"
        :key="movie.id"
        class="movie-card"
        :to="{ name: 'movieDetails', params: { id: movie.id } }"
      >
        <h3 class="rank">{{ movie.rank }}</h3>
        <img :src="movie.image" />
        <div class="copy">
          <p class="top-spot">The top spot</p>
          <h2 class="title">{{ movie.title }}</h2>
          <h3 class="year">{{ movie.year }}</h3>

          <div class="rating-component">
            <v-icon scale="2.5" class="star" name="bi-star-fill" />
            <span class="rating">{{ movie.imDbRating }}</span>
            <span class="out-of-10">/ 10</span>
          </div>
        </div></RouterLink
      >
    </main>
    <Loading v-else />
  </section>
</template>

<script>
import Loading from "../components/Loading.vue";
export default {
  components: { Loading },
};
</script>

<style scoped>
section.movie-list {
  width: 100%;
  padding: 30px 15px;
}

.section-heading {
  color: white;
  font-size: 2rem;
  margin-bottom: 45px;
}

.sorting-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.sorting-buttons button {
  background: none;
  margin: 0 5px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  padding: 10px 15px;
  font-size: 0.75rem;
  cursor: pointer;
}

.sorting-buttons button:hover {
  transform: scale(1.05);
}

.grid {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
}

.movie-card:nth-child(6n),
.movie-card:nth-child(6n + 1) {
  margin-top: 50px;
}

.movie-card {
  position: relative;
  width: 100%;
  background: rgb(36, 36, 36);
  display: flex;
  flex-direction: column;
  padding: 5px;

  justify-content: flex-start;
  align-items: flex-start;
}

.movie-card:hover {
  background: rgb(56, 56, 56);
}

.movie-card:first-child {
  grid-column: span 2;
}

img {
  width: 100%;
}

.movie-card:first-child img {
  width: 100%;
  min-height: 600px;
}

.rank {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgb(36, 36, 36);
  width: 35px;
  height: 35px;
}

.movie-card:first-child .rank {
  width: 60px;
  height: 60px;
  font-size: 1.75rem;
}

.copy {
  padding: 5px 5px;
  height: 100%;
}

.top-spot {
  display: none;
}
.title {
  color: white;
  margin-top: 3px;
  font-size: 1rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.movie-card:first-child .title {
  font-weight: 500;
  font-size: 2rem;
  margin-top: 5px;
  margin-bottom: 5px;
}
.year {
  display: none;
  padding-bottom: 10px;
}
.movie-card:first-child .year {
  display: block;
  color: white;
  opacity: 0.6;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 10px;
}

.plot {
  display: none;
}
.star {
  margin-right: 10px;
  margin-bottom: 5px;

  color: rgb(190, 138, 6);
}

.rating-component {
  display: none;
  margin-top: auto;
}

.movie-card:first-child .rating-component {
  display: block;
}
.rating {
  display: inline;
  font-size: 3rem;
  font-weight: 600;
  margin-right: 5px;

  color: white;
}

.out-of-10 {
  color: white;
  font-size: 1.5rem;
  opacity: 0.6;
  margin-left: 5px;
}

@media (min-width: 565px) {
  .section-heading {
    color: white;
    font-size: 2rem;
    margin-bottom: 45px;
    margin-left: 20px;
  }
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .movie-card:nth-child(6n),
  .movie-card:nth-child(6n + 1) {
    margin-top: unset;
  }

  .movie-card:nth-child(n + 8) {
    margin-top: 50px;
  }

  .movie-card:first-child {
    grid-row: span 3;
  }

  .movie-card:first-child .copy {
    padding: 10px 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .movie-card:first-child .top-spot {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.1rem;
    border: 2px solid rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.6rem;

    margin: 20px 0;
    padding: 5px 10px;
  }
  .movie-card:first-child .plot {
    display: block;
    color: white;
    opacity: 0.6;
    margin-bottom: 30px;
  }
}

@media (min-width: 912px) {
  section.movie-list {
    padding: 0 35px;
  }
  .section-heading {
    font-size: 2.5rem;
    margin-left: 40px;
    margin-bottom: 40px;
  }
  .sorting-buttons {
    margin-bottom: 45px;
  }
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .movie-card:nth-child(n + 8) {
    margin-top: unset;
  }

  .movie-card:nth-child(10n + 11),
  .movie-card:nth-child(10n + 12),
  .movie-card:nth-child(10n + 13),
  .movie-card:nth-child(10n + 14),
  .movie-card:nth-child(10n + 15) {
    margin-top: 75px;
  }

  .movie-card:first-child {
    grid-row: span 3;
  }

  .movie-card:first-child .title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
}
</style>
