<template>
  <section class="reviews">
    <h3 class="section-heading">Reviews</h3>
    <div class="review-card" v-for="review in $store.state.limitedReviews">
      <div class="review-card-header">
        <div class="user-avatar">{{ review.username[0] }}</div>
        <div>
          <h2 class="username">{{ review.username }}</h2>
          <h4 class="date">{{ review.date }}</h4>
        </div>
      </div>

      <h1 class="title">{{ review.title }}</h1>
      <p class="content">{{ review.content }}</p>
      <button class="full-review">
        <a :href="review.reviewLink">Read full review</a>
      </button>
    </div>
    <div class="button-container">
      <button
        class="load-more"
        @click="
          $store.commit('increaseReviewsLimit');
          $store.commit('setLimitedReviews');
        "
      >
        Load More
      </button>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("resetReviewsLimit");
    this.$store.commit("setLimitedReviews");
  },
};
</script>

<style scoped>
section.reviews {
  width: 100%;
  margin-bottom: 50px;
}

.section-heading {
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 35px;
  margin-left: 20px;
}

.review-card {
  background: rgb(36, 36, 36);
  margin: 20px;
  padding: 15px;
  color: white;
}

.review-card:hover {
  background: rgb(56, 56, 56);
}

.review-card-header {
  display: flex;
  margin-bottom: 20px;
}
.user-avatar {
  background: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.4rem;

  font-weight: 500;
  margin-right: 15px;
}

.username {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.date {
  font-size: 0.8rem;

  opacity: 0.4;
  font-weight: 600;
}

.title {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.content {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.full-review {
  outline: none;
  background: none;
  border: 2px solid white;
  text-transform: uppercase;
  padding: 10px 15px;
  font-weight: 500;
  opacity: 0.6;
  font-size: 0.75rem;
  cursor: pointer;
}

.full-review a {
  color: white;
}

.full-review:hover {
  transform: scale(1.05);
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.load-more {
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  padding: 10px 15px;
  font-size: 0.75rem;
  cursor: pointer;
}

.load-more:hover {
  transform: scale(1.05);
}

@media (min-width: 565px) {
  .section-heading {
    margin: 45px 0 35px 35px;
  }

  .review-card {
    margin: 0 35px 20px 35px;
    padding: 15px;
    color: white;
  }
  .content {
    font-size: 0.8rem;
    opacity: 0.6;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@media (min-width: 912px) {
  .section-heading {
    margin: 55px 0 55px 75px;
  }
  .review-card {
    max-width: 900px;
    margin: 30px auto;
  }
  .content {
    font-size: 0.8rem;
    line-height: 1rem;

    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: unset;
  }
}
</style>
