<template>
  <DetailsHeader />
  <DetailsImages />
</template>

<script>
import DetailsHeader from "../../components/DetailsHeader.vue";
import DetailsImages from "../../components/DetailsImages.vue";

export default {
  props: ["id"],
  components: { DetailsHeader, DetailsImages },

  mounted() {
    // this.$store.commit("setMovieDetailsId", this.id);
    // this.$store.dispatch("getMovieDetails");
  },
};
</script>

<style scoped></style>
