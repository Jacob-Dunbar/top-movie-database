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
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
