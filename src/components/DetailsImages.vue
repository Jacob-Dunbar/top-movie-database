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
.images {
  margin-bottom: 25px;
}
.section-heading {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
}

.gallery {
  display: flex;
  height: 200px;
  width: 100%;
  overflow-x: scroll;
}

img {
  margin-left: 15px;
}

@media (min-width: 540px) {
  section.images {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    flex-grow: 1;
  }

  .section-heading {
    font-size: 1.25rem;
    margin-bottom: 10px;
    margin-left: 15px;
  }
  .gallery {
    height: 100px;
    flex-grow: 1;
  }
}

@media (min-width: 912px) {
  .gallery {
    height: 250px;
  }
}
</style>
