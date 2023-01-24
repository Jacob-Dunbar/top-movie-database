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
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 10px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    black,
    black,
    black,
    black,
    black,
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    black,
    black,
    black,
    black,
    black,
    transparent
  );
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
  width: 40%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  z-index: 10;
}

.tag-line {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
  opacity: 0.6;
  min-width: 150px;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  min-width: 200px;
}

.plot {
  font-size: 0.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 20px;
  opacity: 0.6;
  min-width: 150px;
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
  transition: background-size 1s ease-in-out;
}

.button-container:hover {
  background-size: 2000%;
  transform: scale(1.02);
}

.button-border {
  background-color: rgba(116, 116, 116, 0.4);
  padding: 2.5px;
}
.button-bg {
  background-color: #0f1116;
}
.trailer-button {
  outline: none;
  border: none;
  padding: 5px 10px;
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-transform: uppercase;
  background-position: center;
  background-size: 1000%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(178, 178, 178, 0.4);
  cursor: pointer;
  transition: all 1s ease-in-out;
}

.trailer-button:hover {
  background-size: 2000%;
}

.image-wrapper {
  position: relative;
  width: 60%;
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

@media (min-width: 541px) {
  .tag-line {
    font-size: 0.75rem;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .copy {
    margin-top: 5%;
    padding: 25px 25px 25px 40px;
  }
  .title {
    font-size: 3rem;
    margin-bottom: 25px;
    min-width: 300px;
  }

  .plot {
    min-width: 200px;
    font-size: 0.8rem;
    line-height: 1.1rem;
    margin-bottom: 35px;
  }

  @media (min-width: 913px) {
    header {
      height: 75vh;
      position: relative;
    }

    .copy {
      margin-top: unset;
      width: 50%;
      padding: 75px 0 0 75px;
    }

    .tag-line {
      margin-bottom: 20px;
    }

    .title {
      font-size: 5.5rem;
      margin-bottom: 30px;
      font-weight: 600;
      line-height: 6rem;
      min-width: 500px;
    }

    .plot {
      font-size: 0.9rem;
      line-height: 1.2rem;
      width: 80%;
      -webkit-line-clamp: 3;
      margin-bottom: 40px;
      font-weight: normal;
    }

    .trailer-button {
      font-size: 1rem;
      padding: 10px 15px;
    }

    .image-wrapper {
      width: 30%;
      height: 100%;
      margin-left: 5%;
      -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black,
        transparent 90%
      );
      mask-image: linear-gradient(
        to right,
        transparent,
        black,
        transparent 90%
      );
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
