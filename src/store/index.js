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
      state.top250 = data.items;
      // console.log(state.top250[0]);
    },
  },
  actions: {
    fetch250Data() {
      axios
        .get(
          `https://imdb-api.com/en/API/Top250Movies/${process.env.VUE_APP_API_KEY}`
        )
        // .then((res) => res.json())
        // .then(console.log(data))
        .then((res) => {
          this.commit("set250Data", res.data);
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
