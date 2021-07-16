<template>
  <div class="action">
    <h1 style="marginTop:3rem;">Action Movies</h1>

    <div v-for="movie in movies" :key="movie.id" style="marginTop:3rem;">
      <MoviePoster
        :movieTitle="movie.original_title"
        :movieImg="movie.poster_path"
      />
    </div>
  </div>
</template>
<script>
import MoviePoster from "../components/MoviePoster.vue";
export default {
  name: "Action",
  components: { MoviePoster },
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      genreNum: 28,
      movies: [],
    };
  },
  async created() {
    await this.$store.dispatch(`fetchMovies`, {
      apiKey: this.apiKey,
      genreNum: this.genreNum,
    });
  
    this.movies = this.$store.state.movies
  },
};
</script>
