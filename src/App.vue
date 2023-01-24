<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
  mounted() {
    // this.$store.dispatch("getComingSoonData");
    // this.$store.dispatch("get250Data");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Work Sans", sans-serif;
  box-sizing: border-box;
}

body {
  background: #0f1116;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
