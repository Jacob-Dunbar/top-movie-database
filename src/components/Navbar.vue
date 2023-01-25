<template>
  <nav>
    <RouterLink to="/"><Logo class="logo" /></RouterLink>
    <!-- <p>Top Movie Database</p> -->
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
  padding: 14px 75px 10px 75px;
  align-items: center;
  justify-content: center;
  color: white;

  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
}

.logo {
  height: 30px;
  cursor: pointer;
}

/* @media (min-width: 912px) {
  nav {
    justify-content: start;
  }
} */
</style>
