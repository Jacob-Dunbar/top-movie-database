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

  margin: 30px 0;
}
.section-heading {
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 25px 20px;
}

.gallery {
  display: flex;
  height: 200px;

  padding: 0 10px;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 50px;
}

.gallery::-webkit-scrollbar {
  display: none;
}

.gallery img {
  margin-left: 15px;
}

@media (min-width: 565px) {
  section.images {
    margin-left: -10%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    flex-grow: 1;
    padding: 0;
  }

  .section-heading {
    color: white;
    font-size: 1.5rem;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .section-heading {
    display: none;
  }

  .gallery {
    margin: 20px 0 0 10px;
    height: 40px;
    max-height: 150px;
    flex-grow: 1;
    padding: 0 20px;
    margin-left: 0;
    width: 100%;
    -webkit-mask-image: linear-gradient(to left, black, black, transparent);
    mask-image: linear-gradient(to left, black, black, transparent);
  }
}

@media (min-width: 912px) {
  .gallery {
    margin-top: auto;

    margin: auto 0 20px -20px;
    -webkit-mask-image: unset;
    mask-image: unset;
  }
}
</style>
