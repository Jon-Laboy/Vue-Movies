<template>
  <div>
    <h3>{{ movieTitle }}</h3>
    <img :src="imageURL + movieImg" alt="movie poster" />
  </div>
</template>
<script>
export default {
  props: {
    movieTitle: String,
    movieImg: String,
  },
  data() {
    return {
      imageURL: "https://image.tmdb.org/t/p/w300/",
    };
  },
};
</script>
<style scoped></style>
