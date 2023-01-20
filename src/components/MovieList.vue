<template>
  <section>
    <header>
      <h2>Top Movies</h2>
      <button>SORT</button>
    </header>
    <main>
      <div class="movie-card">
        <h2>Movie</h2>
      </div>
      <div class="movie-card">
        <h2>Movie</h2>
      </div>
      <div class="movie-card">
        <h2>Movie</h2>
      </div>
    </main>
  </section>
</template>

<script></script>

<style scoped>
section {
  width: 100%;
}

header {
  width: 100%;
  background: gray;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

header h2 {
  font-size: 1.25rem;
}

header button {
  padding: 5px 10px;
}

main {
  margin: 0 15px;
}

main .movie-card {
  width: 100%;
  background: gray;
  margin-bottom: 10px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
