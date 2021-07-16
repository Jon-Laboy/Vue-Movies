<template>
  <div style="marginTop: 8rem">
    <b-button variant="success" @click="viewGenrePage">{{ title }}</b-button>
  </div>
</template>
<script>
export default {
  name: "GenreCards",
  props: {
    title: String,
    genre: String,
  },
  methods: {
    viewGenrePage() {
      this.$router.push({ path: `/${this.genre}` });
    },
  },
};
</script>
<style scoped>
button { 
  width: 15vw;
  height: 15vh;
  background: white;
  color: green;
  border:2px solid green;
  border-radius: 2rem;
  font-size: 2rem;
}
.genre-card {
  width: 15rem;
  border: 1px solid green;
  border-radius: 1.7rem;
  cursor: pointer;
  padding: 0.5rem;
}
.genre-card :hover {
  color: green;
}
</style>
