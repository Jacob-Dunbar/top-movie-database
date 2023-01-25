<template>
  <section class="info">
    <button class="back-button" @click="this.$router.go(-1)">
      <v-icon scale="0.75" class="star" name="fa-chevron-left" /> back
    </button>
    <h2 class="title">{{ $store.state.movieDetails.title }}</h2>
    <h4 class="date">{{ $store.state.movieDetails.year }}</h4>
    <span class="rating">{{ $store.state.movieDetails.rating }}</span>
    <span class="out-of-10"> / 10</span>
    <p class="plot">{{ $store.state.movieDetails.plot }}</p>
  </section>
</template>

<script>
import DetailsImages from "./DetailsImages.vue";

export default {
  components: { DetailsImages },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back-button {
  border: none;
  cursor: pointer;
  margin: -35px 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 5px 7px 5px 4px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 2px;
  background: black;

  opacity: 0.8;
  color: white;
}
section.info {
  margin-top: 10px;
  padding: 0 20px;
  margin-bottom: 50px;
  color: white;
}

.title {
  max-width: 90%;
  font-weight: 600;
  font-size: 1.9rem;
  margin-bottom: 5px;
}
.date {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-bottom: 10px;
  opacity: 0.6;
}

.rating {
  font-size: 3.5rem;
  font-weight: 600;
  opacity: 0.8;
}

.plot {
  opacity: 0.6;

  margin-top: 10px;
}

@media (min-width: 565px) {
  section.info {
    width: 110%;
    margin-top: 50px;
    padding: 0 15px;
    margin-left: -10%;
    margin-bottom: 25px;
  }

  .rating {
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.8;
  }

  .title {
    font-size: 1.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .plot {
    font-size: rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 25px;
  }
}

@media (min-width: 912px) {
  .title {
    margin-top: 10px;
    font-size: 3.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .date {
    margin-bottom: 10px;
  }

  .rating {
    font-size: 3.5rem;
    opacity: 1;
  }

  .plot {
    font-size: 1rem;
    width: 70%;
    margin-top: 25px;
  }
}
</style>
