<template>
  <DetailsHeader />
  <DetailsImages />
  <DetailsCast />
  <DetailsReviews />
</template>

<script>
import DetailsHeader from "../../components/DetailsHeader.vue";
import DetailsImages from "../../components/DetailsImages.vue";
import DetailsCast from "../../components/DetailsCast.vue";
import DetailsReviews from "../../components/DetailsReviews.vue";

export default {
  props: ["id"],
  components: { DetailsHeader, DetailsImages, DetailsCast, DetailsReviews },

  mounted() {
    // this.$store.commit("setMovieDetailsId", this.id);
    // this.$store.dispatch("getMovieDetails");
    // this.$store.dispatch("getMovieReviews");
  },
};
</script>

<style scoped></style>
