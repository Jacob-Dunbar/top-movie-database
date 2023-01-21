import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    top250: [],
    test: 0,
  },
  getters: {},
  mutations: {
    set250Data(state, data) {
      state.top250 = data.item;
      console.log(data.items);
    },
  },
  actions: {
    fetch250Data() {
      axios(
        `https://imdb-api.com/en/API/Top250Movies/${process.env.VUE_APP_API_KEY}`
      )
        .then((response) => {
          this.commit("set250Data", response.data);
          // (response) => response.json();
        })

        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {},
});
