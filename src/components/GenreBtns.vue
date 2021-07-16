<template>
  <div style="marginTop: 5rem">
    <b-button size="large" variant="outline-success" @click="viewGenrePage">{{ title }}</b-button>
  </div>
</template>
<script>
export default {
  name: "GenreBtns",
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
  font-size: 3rem;
}
</style>
