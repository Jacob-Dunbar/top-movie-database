<template>
  <section class="info">
    <h2 class="title">{{ $store.state.movieDetails.title }}</h2>
    <h4 class="date">{{ $store.state.movieDetails.year }}</h4>
    <span class="rating">{{ $store.state.movieDetails.rating }}</span>
    <span class="votes"> ({{ $store.state.movieDetails.votes }})</span>
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

<style>
section.info {
  margin-top: -20px;
  padding: 0 15px;
  margin-bottom: 25px;
}

.title {
  max-width: 90%;
  font-size: 1.75rem;
  margin-bottom: 5px;
}
.date {
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-bottom: 10px;
}

.rating {
  font-size: 2rem;
  font-weight: bold;
}

.plot {
  margin-top: 10px;
}

@media (min-width: 540px) {
  section.info {
    margin-top: 0;
    padding: 0 15px;
    margin-bottom: 25px;
  }

  .plot {
    font-size: 1.2rem;
    width: 80%;
    margin-top: 25px;
  }
}

@media (min-width: 912px) {
  .title {
    font-size: 3rem;
  }

  .date {
    margin-bottom: 5px;
  }

  .plot {
    font-size: 1.2rem;
    width: 80%;
    margin-top: 25px;
  }
}
</style>
