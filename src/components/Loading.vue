<template>
  <div class="container">
    <v-icon scale="2.5" class="loading" name="fc-film-reel" />
    <h2>Loading...</h2>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.loading {
  text-align: center;
  margin-top: 10px;
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: reverse;
  transform: rotate(3deg);
  transform: rotate(0.3rad);
  transform: rotate(3grad);
  transform: rotate(0.03turn);
}

h2 {
  color: white;
  opacity: 0.4;
  margin: 15px 0 150px 5px;

  font-size: 1rem;
  font-weight: 400;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 912px) {
  .container {
    height: 75vh;
  }
}
</style>
