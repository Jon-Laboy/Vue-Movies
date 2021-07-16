import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    getMovies(state, movies) { 
      return state.movies = movies
    },
  },
  actions: {
    async fetchMovies({ commit },{apiKey,genreNum}) {
        const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreNum}`;
        const response = await fetch(endPoint);
        const data = await response.json();
        commit('getMovies', data.results)
      },
  },
  modules: {
  }
})
