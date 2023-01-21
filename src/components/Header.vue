<template>
  <header>
    <h2>Header {{ $store.state.test }}</h2>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
  height: 300px;
  background: lightgray;
  padding: 20px;
}

header h2 {
  text-align: center;
}
</style>
