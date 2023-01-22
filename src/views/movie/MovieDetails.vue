<template>
  <div class="hero-container">
    <button @click="back">Go back</button>
    <img
      class="hero"
      src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg"
    />
  </div>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.hero {
  width: 100%;
}

.hero-container {
  width: 100%;
  position: relative;
  display: inline-block;
}

.hero-container button {
  position: absolute;
  z-index: 10;
}

.hero-container::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgb(0, 0, 0)
  );
}
h1 {
  background: black;
  color: white;
}
</style>
