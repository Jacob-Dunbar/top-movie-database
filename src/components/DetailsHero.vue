<template>
  <div class="hero-container">
    <img class="hero-image" :src="$store.state.movieDetails.poster" />
  </div>
  <button class="back-button" @click="this.$router.go(-1)">
    <v-icon scale="0.75" class="star" name="fa-chevron-left" /> back
  </button>
</template>

<script></script>

<style scoped>
.hero-container {
  width: 100%;
  position: relative;
  display: inline-block;
}

.hero-image {
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to bottom,
    black,
    black,
    black,
    transparent
  );
  mask-image: linear-gradient(to bottom, black, black, black, transparent);
}

.back-button {
  border: none;
  cursor: pointer;
  margin: -25px 0 20px 20px;
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

@media (min-width: 565px) {
  .hero-container {
    display: block;
    position: relative;
    width: 55%;
    flex-shrink: 0;
  }

  .back-button {
    position: absolute;
    z-index: 10;
    top: 90px;
    left: 0px;

    padding: 8px 11px 8px 8px;
  }

  .hero-image {
    -webkit-mask-image: linear-gradient(to right, black, transparent);
    mask-image: linear-gradient(to right, black, transparent);
  }
}

@media (min-width: 912px) {
  .hero-container {
    overflow-y: hidden;
    display: flex;
    justify-content: center;
  }

  .hero-image {
    height: 100%;
    width: unset;

    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black,
      transparent
    );
    mask-image: linear-gradient(to right, transparent, black, transparent);
  }
}
</style>
