<template>
  <div class="hero-container">
    <button class="back-button" @click="this.$router.go(-1)">Go back</button>
    <img class="hero-image" :src="$store.state.movieDetails.poster" />
  </div>
</template>

<script></script>

<style>
.hero-container {
  width: 100%;
  position: relative;
  display: inline-block;
}

.back-button {
  cursor: pointer;
  position: absolute;
  z-index: 10;
}

.hero-image {
  width: 100%;
}

.hero-container::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
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

@media (min-width: 540px) {
  .hero-container {
    display: block;
    margin: 0 auto;
    width: 50%;
    flex-shrink: 0;
  }

  .hero-container::after {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgb(255, 255, 255)
    );
  }
}

@media (min-width: 912px) {
  .hero-container {
    height: 80vh;
    overflow-y: hidden;
  }

  .hero-image {
  }
}
</style>
