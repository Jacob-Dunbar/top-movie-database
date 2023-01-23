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
      <div class="image-wrapper">
        <img :src="$store.state.comingSoon.image" />
      </div>
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
  width: 50%;
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

.image-wrapper {
  position: relative;
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

img {
  width: 100%;
  object-position: center;
}

.image-wrapper::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgb(255, 255, 255)
  );
}

@media (min-width: 540px) {
  .tag-line {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .title {
    font-size: 2.75rem;
    margin-bottom: 10px;
  }

  .plot {
    font-size: 1rem;
    -webkit-line-clamp: 6;
  }

  @media (min-width: 912px) {
    header {
      height: 80vh;
    }

    img {
      object-fit: cover;
    }

    .plot {
      -webkit-line-clamp: 7;
    }
  }
}
</style>
