<template>
  <div class="home">
    <h1 style="marginTop:3rem;">Movies Man</h1>
    <b-container class="mt-4">
      <b-row>
        <b-col sm="12" md="4"><GenreCards title="Action" genre="action"/></b-col>
        <b-col sm="12" md="4"><GenreCards title="Comedy" genre="comedy"/></b-col>
        <b-col sm="12" md="4"><GenreCards title="Horror" genre="horror"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GenreCards from "../components/GenreCards.vue";
// const API_KEY = process.env.VUE_APP_MOVIE_API_KEY;

export default {
  name: "Home",
  components: {
    GenreCards,
  },
  // data() {
  //   return {

  //   }
  // },
};
</script>
