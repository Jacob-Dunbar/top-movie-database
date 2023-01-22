<template>
  <header class="hero-container">
    <button @click="back">Go back</button>
    <img class="hero" :src="$store.state.movieDetails.poster" />
  </header>
  <section class="info">
    <h2 class="title">{{ $store.state.movieDetails.title }}</h2>
    <h4 class="date">{{ $store.state.movieDetails.year }}</h4>
    <span class="rating">{{ $store.state.movieDetails.rating }}</span>
    <span class="votes"> ({{ $store.state.movieDetails.votes }})</span>
    <p class="plot">{{ $store.state.movieDetails.plot }}</p>
  </section>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
}
</script>

<style>
.hero {
  width: 100%;
}

.hero-container {
  width: 100%;
  position: relative;
  display: inline-block;
  z-index: -10;
}

.hero-container button {
  position: absolute;
  z-index: 10;
}

.hero-container::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgb(255, 255, 255)
  );
}

section.info {
  margin-top: -20px;
  padding: 0 15px;
  margin-bottom: 25px;
}

.info .title {
  max-width: 90%;
  font-size: 1.75rem;
  margin-bottom: 5px;
}
.info .date {
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-bottom: 10px;
}

.info .rating {
  font-size: 2rem;
  font-weight: bold;
}

.info .plot {
  margin-top: 10px;
}
</style>
