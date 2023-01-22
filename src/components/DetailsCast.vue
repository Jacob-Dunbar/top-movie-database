<template>
  <section class="cast">
    <h1 class="section-heading">Cast</h1>
    <div class="cast-list">
      <div v-for="member in $store.state.movieDetails.cast" class="member-card">
        <div class="image-mask">
          <img
            v-if="
              member.image !==
              'https://imdb-api.com/images/original/nopicture.jpg'
            "
            :src="member.image"
            :alt="member.name"
          />
          <img v-else class="no-image" :src="member.image" :alt="member.name" />
        </div>
        <h2 class="member-name">{{ member.name }}</h2>
        <h2 class="member-role">{{ member.asCharacter }}</h2>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section.cast {
  margin-bottom: 25px;
}

.section-heading {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
}
.cast-list {
  display: flex;
  margin-top: 20px;
  overflow-x: scroll;
}

.member-card {
  display: flex;
  flex-direction: column;

  margin-left: 25px;
}
.image-mask {
  width: 120px;
  height: 120px;
  margin-inline: 10px;
  border-radius: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

img {
  width: 100%;
}

.no-image {
  align-self: center;
}

.member-name {
  text-align: center;
  font-size: 1rem;
  margin-top: 10px;
}
.member-role {
  text-align: center;
  font-size: 0.8rem;

  margin-top: 10px;
}
</style>
