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
      <button><a :href="review.reviewLink">Read full review</a></button>
    </div>
    <button
      class="load-more"
      @click="
        $store.commit('increaseReviewsLimit');
        $store.commit('setLimitedReviews');
      "
    >
      Load More
    </button>
    <button
      class="show-less"
      @click="
        $store.commit('resetReviewsLimit');
        $store.commit('setLimitedReviews');
      "
    >
      Show less
    </button>
  </section>
</template>

<script></script>

<style scoped>
section.reviews {
  margin-bottom: 25px;
}
.section-heading {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
}

.review-card {
  background-color: lightgray;
  margin: 15px;
  padding: 10px;
}

.review-card-header {
  display: flex;
  margin-bottom: 10px;
}
.user-avatar {
  background: black;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  margin-right: 10px;
}

.username {
  font-size: 1rem;
}

.date {
  font-size: 0.9rem;
  color: darkgray;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.content {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
