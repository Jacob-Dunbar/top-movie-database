<template>
  <div class="hero-container">
    <img class="hero-image" :src="$store.state.movieDetails.poster" />
  </div>
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
    top: 110px;
    left: 55px;

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
    -webkit-mask-image: linear-gradient(
      to bottom,
      black,
      black,
      black,
      transparent
    );
    mask-image: linear-gradient(to bottom, black, black, black, transparent);
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
