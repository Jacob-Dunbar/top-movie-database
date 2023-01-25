<template>
  <header v-if="$store.state.movieDetails">
    <DetailsHero />
    <div class="info-and-images">
      <DetailsInfo />
      <DetailsImages />
    </div>
    <img class="blur-bg" :src="$store.state.movieDetails.poster" />
  </header>
  <Loading v-else />
  <DetailsCast v-if="$store.state.movieDetails" />
  <Loading v-else />
  <DetailsReviews v-if="$store.state.movieDetails" />
  <Loading v-else />
</template>

<script>
import DetailsHero from "../../components/DetailsHero.vue";
import DetailsInfo from "../../components/DetailsInfo.vue";
import DetailsImages from "../../components/DetailsImages.vue";
import DetailsCast from "../../components/DetailsCast.vue";
import DetailsReviews from "../../components/DetailsReviews.vue";
import Loading from "../../components/Loading.vue";

export default {
  props: ["id"],
  components: {
    DetailsHero,
    DetailsInfo,
    DetailsImages,
    DetailsCast,
    DetailsReviews,
    Loading,
  },

  mounted() {
    this.$store.commit("setMovieDetailsId", this.id);
    this.$store.dispatch("getMovieDetails");
    this.$store.dispatch("getMovieReviews");
  },
};
</script>

<style scoped>
.blur-bg {
  display: none;
}

@media (min-width: 565px) {
  header {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
  }

  .info-and-images {
    margin: 0;
    width: 45%;
    padding-top: 15px;
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 912px) {
  header {
    height: 75vh;
  }
  .info-and-images {
    justify-content: space-between;
  }

  .blur-bg {
    display: block;
    position: absolute;
    top: -40%;
    left: -15%;
    filter: blur(60px);
    width: 70%;
    z-index: -1;
  }
}
</style>
