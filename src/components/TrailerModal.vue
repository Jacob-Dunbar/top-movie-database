<template>
  <div @click.self="$store.commit('hideTrailerModal')" class="wrapper">
    <div v-if="$store.state.trailerUrl.linkEmbed" class="container">
      <iframe
        width="560"
        height="315"
        :src="$store.state.trailerUrl.linkEmbed"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <Loading class="spinner" v-if="$store.state.trailerUrl.linkEmbed === ''" />
    <p class="unavailable" v-if="$store.state.trailerUrl.linkEmbed === null">
      No trailer available
    </p>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";

export default {
  components: { Loading },
};
</script>

<style scoped>
.wrapper {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100%;
  z-index: 100;

  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 100%;

  height: 0;
  padding-bottom: 56.25%;
  position: relative;
}

iframe {
  width: 100%;
  max-width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.spinner {
  margin-top: 70vh;
}

.unavailable {
  width: 100%;
  text-align: center;
  color: white;
  opacity: 0.6;
}

@media (min-width: 912px) {
  .wrapper {
    padding: 250px;
  }
}
</style>
