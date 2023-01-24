<template>
  <nav>
    <RouterLink to="/"><Logo class="logo" /></RouterLink>
    <p>Top Movie Database</p>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  background: #0f1116;

  display: flex;
  padding: 15px 75px 10px 75px;
  align-items: center;
  justify-content: space-between;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
}

.logo {
  height: 30px;
  opacity: 0.8;
}
.logo:hover {
  height: 30px;
  opacity: 1;
}
</style>
