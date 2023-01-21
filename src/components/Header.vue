<template>
  <header>
    <div class="wrapper" v-if="$store.state.comingSoon">
      <div class="copy">
        <h3>coming soon...</h3>
        <h1>{{ $store.state.comingSoon.title }}</h1>
        <p>{{ $store.state.comingSoon.plot }}</p>
        <button>Play Trailer</button>
      </div>
      <img :src="$store.state.comingSoon.image" />
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
  background: lightgray;
}

header .wrapper {
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

.copy h3 {
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 5px;
}
.copy h1 {
  font-size: 1.25rem;
  margin-bottom: 5px;
}

.copy p {
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
}

.copy button {
  outline: none;
  border: none;
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 25px;
  margin-top: auto;
}

header .wrapper img {
  width: 33%;
  margin: 5px;
}
</style>
