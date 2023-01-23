<template>
  <header>
    <div class="wrapper" v-if="$store.state.comingSoon">
      <div class="copy">
        <h3 class="tag-line">coming soon...</h3>
        <h1 class="title">{{ $store.state.comingSoon.title }}</h1>
        <p class="plot">{{ $store.state.comingSoon.plot }}</p>
        <button
          class="trailer-button"
          @click="$store.commit('showTrailerModal')"
        >
          Play Trailer
        </button>
      </div>
      <img :src="$store.state.comingSoon.image" />
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.copy {
  width: 80vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.tag-line {
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 5px;
}
.title {
  font-size: 1.25rem;
  margin-bottom: 5px;
}

.plot {
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
}

.trailer-button {
  outline: none;
  border: none;
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 25px;
  margin-top: auto;
}

img {
  width: 50%;
}
</style>
