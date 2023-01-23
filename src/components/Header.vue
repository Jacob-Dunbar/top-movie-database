<template>
  <header>
    <div class="wrapper" v-if="$store.state.comingSoon">
      <div class="copy">
        <h3 class="tag-line">coming soon...</h3>
        <h1 class="title">{{ $store.state.comingSoon.title }}</h1>
        <p class="plot">{{ $store.state.comingSoon.plot }}</p>
        <div
          class="button-container"
          v-bind:style="{
            'background-image': 'url(' + posterImage + ')',
          }"
        >
          <div class="button-border">
            <div class="button-bg">
              <button
                class="trailer-button"
                @click="$store.commit('showTrailerModal')"
                v-bind:style="{
                  'background-image': 'url(' + posterImage + ') ',
                }"
              >
                Play Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img :src="$store.state.comingSoon.image" />
      </div>
    </div>
    <img class="blur-bg" :src="$store.state.comingSoon.image" />
  </header>
</template>

<script>
export default {
  computed: {
    posterImage: {
      get() {
        return this.$store.state.comingSoon.image;
      },
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
}

.blur-bg {
  display: none;
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
  color: white;
}

.tag-line {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.5rem;
  margin-top: 5px;
  margin-bottom: 15px;
  opacity: 0.6;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.plot {
  font-size: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
  opacity: 0.6;
  line-height: 0.9rem;
}

.button-container {
  position: relative;
  background-position: center;
  background-size: 1500%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  /* padding: 2px; */
  background-color: rgba(255, 255, 255, 0.341);
}

.button-border {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2px;
}
.button-bg {
  background-color: #0f1116;
}
.trailer-button {
  outline: none;
  border: none;
  padding: 5px 10px;
  background-position: center;
  background-size: 1000%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(178, 178, 178, 0.4);
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
    #0f1116
  );
}

@media (min-width: 540px) {
  .tag-line {
    font-size: 0.75rem;

    margin-bottom: 20px;
  }

  .title {
    font-size: 2.75rem;
    margin-bottom: 15px;
  }

  .plot {
    -webkit-line-clamp: 6;
    margin-bottom: 20px;
  }

  @media (min-width: 912px) {
    header {
      height: 80vh;
      position: relative;
    }

    .copy {
      padding: 60px;
    }

    .tag-line {
      margin-bottom: 35px;
    }

    .title {
      font-size: 5rem;
      margin-bottom: 30px;
    }

    .plot {
      font-size: 1rem;
      line-height: 1.2rem;
      width: 80%;
      -webkit-line-clamp: 6;
      margin-bottom: 40px;
      font-weight: normal;
    }

    .trailer-button {
      font-size: 1.25rem;
      padding: 10px 20px;
    }

    .image-wrapper {
      width: 30%;
      height: 100%;
      margin-left: 5%;
      -webkit-mask-image: linear-gradient(
        to right,
        transparent -3%,
        black,
        transparent 103%
      );
      mask-image: linear-gradient(to right, transparent 25%, black 75%);
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
        #0f1116
      );
    }

    img {
      object-fit: cover;
      width: unset;
      height: 100%;
    }

    .blur-bg {
      display: block;
      position: absolute;
      top: 0;
      right: -20%;
      filter: blur(60px);
      width: 100%;
      z-index: -1;
    }
  }
}
</style>
