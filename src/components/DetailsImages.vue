<template>
  <section class="images">
    <h3 class="section-heading">Images</h3>
    <div class="gallery">
      <img
        :src="$store.state.movieDetails.images[0].image"
        :alt="$store.state.movieDetails.images[0].title"
      />
      <img
        :src="$store.state.movieDetails.images[1].image"
        :alt="$store.state.movieDetails.images[1].title"
      />
      <img
        :src="$store.state.movieDetails.images[2].image"
        :alt="$store.state.movieDetails.images[2].title"
      />
    </div>
  </section>
</template>

<script></script>

<style scoped>
section.images {
  margin-bottom: 25px;
}
.section-heading {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
}

.gallery {
  display: flex;
  height: 300px;
  width: 100%;
  overflow-x: scroll;
}

img {
  margin-left: 15px;
}
</style>
