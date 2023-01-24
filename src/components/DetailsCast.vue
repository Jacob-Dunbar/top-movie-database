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
.cast-list {
  display: flex;
  width: 100%;
  margin-top: 20px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.cast-list::-webkit-scrollbar {
  display: none;
}
.member-card {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  color: white;
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
  opacity: 0.8;
  margin-top: 10px;
}
.member-role {
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: 10px;
}

@media (min-width: 565px) {
  .section-heading {
    margin: 45px 0 45px 35px;
  }
}

@media (min-width: 912px) {
  .section-heading {
    margin: 25px 0 25px 75px;
  }

  .member-card:first-child {
    margin-left: 75px;
  }
}
</style>
