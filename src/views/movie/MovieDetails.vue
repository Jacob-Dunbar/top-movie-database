<template>
  <header>
    <DetailsHero />
    <div class="info-and-images">
      <DetailsInfo />
      <DetailsImages />
    </div>
  </header>
  <DetailsCast />
  <DetailsReviews />
</template>

<script>
import DetailsHero from "../../components/DetailsHero.vue";
import DetailsInfo from "../../components/DetailsInfo.vue";
import DetailsImages from "../../components/DetailsImages.vue";
import DetailsCast from "../../components/DetailsCast.vue";
import DetailsReviews from "../../components/DetailsReviews.vue";

export default {
  props: ["id"],
  components: {
    DetailsHero,
    DetailsInfo,
    DetailsImages,
    DetailsCast,
    DetailsReviews,
  },

  mounted() {
    // this.$store.commit("setMovieDetailsId", this.id);
    // this.$store.dispatch("getMovieDetails");
    // this.$store.dispatch("getMovieReviews");
  },
};
</script>

<style scoped>
@media (min-width: 540px) {
  header {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
  }

  .info-and-images {
    margin: 0;
    width: 50%;
    padding-top: 15px;
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 912px) {
  .info-and-images {
    padding-top: 35px;
    justify-content: space-between;
  }
}
</style>
