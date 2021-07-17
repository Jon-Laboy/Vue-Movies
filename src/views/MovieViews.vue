<template>
  <div class="action">
    <h1 style="marginTop:3rem;">{{`${genreTitle} Movies`}}</h1>

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
  name: "MovieViews",
  components: { MoviePoster },
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      genreNum: null,
      movies: [],
      genreTitle: '',
    };
  },
  async created() {
    this.checkGenre();
  },
  watch: {
    $route(to, from) {
      if (from.path !== to.path) {
        this.checkGenre();
      }
    },
  },
  methods: {
    async checkGenre() {
      switch (this.$route.name) {
        case "Action":
          this.genreNum = 28;
          break;
        case "Comedy":
          this.genreNum = 35;
          break;
        case "Horror":
          this.genreNum = 27;
          break;
        case "Romance":
          this.genreNum = 10749;
          break; 
        default:
          this.genreNum = null;
      }
      await this.$store.dispatch(`fetchMovies`, {
        apiKey: this.apiKey,
        genreNum: this.genreNum,
      });
      this.movies = this.$store.state.movies;
      this.genreTitle = this.$route.name; 
    },
  },
};
</script>
