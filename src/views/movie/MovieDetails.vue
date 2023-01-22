<template>
  <DetailsHeader />
  <DetailsImages />
  <DetailsCast />
</template>

<script>
import DetailsHeader from "../../components/DetailsHeader.vue";
import DetailsImages from "../../components/DetailsImages.vue";
import DetailsCast from "../../components/DetailsCast.vue";

export default {
  props: ["id"],
  components: { DetailsHeader, DetailsImages, DetailsCast },

  mounted() {
    // this.$store.commit("setMovieDetailsId", this.id);
    // this.$store.dispatch("getMovieDetails");
  },
};
</script>

<style scoped></style>
