<template>
  <div class="home">
    <h1 style="marginTop:3rem;">Movies Man</h1>
    <b-container class="mt-4">
      <b-row>
        <b-col sm="12" md="4"><GenreBtns title="Action" genre="action"/></b-col>
        <b-col sm="12" md="4"><GenreBtns title="Comedy" genre="comedy"/></b-col>
        <b-col sm="12" md="4"><GenreBtns title="Horror" genre="horror"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GenreBtns from "../components/GenreBtns.vue";


export default {
  name: "Home",
  components: {
    GenreBtns,
  },
};
</script>
