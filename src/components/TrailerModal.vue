<template>
  <div @click.self="$store.commit('hideTrailerModal')" class="wrapper">
    <div class="container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3rfBRWejDPQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.wrapper {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  max-width: 800px;
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

.container iframe {
  width: 100%;
  max-width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
