import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    top250: [
      {
        id: "tt0111161",
        rank: "1",
        title: "The Shawshank Redemption",
        fullTitle: "The Shawshank Redemption (1994)",
        year: "1994",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        imDbRating: "9.2",
        imDbRatingCount: "2688320",
      },
      {
        id: "tt0068646",
        rank: "2",
        title: "The Godfather",
        fullTitle: "The Godfather (1972)",
        year: "1972",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
        imDbRating: "9.2",
        imDbRatingCount: "1864447",
      },
      {
        id: "tt0468569",
        rank: "3",
        title: "The Dark Knight",
        fullTitle: "The Dark Knight (2008)",
        year: "2008",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        imDbRating: "9.0",
        imDbRatingCount: "2661743",
      },
    ],
    comingSoon: {
      contentRating: null,
      directorList: [],
      directors: null,
      fullTitle: "A Haunting in Venice (2023)",
      genres: "Crime, Drama, Mystery",
      id: "tt22687790",
      imDbRating: null,
      imDbRatingCount: null,
      image:
        "https://m.media-amazon.com/images/M/MV5BOTA2MDc4NmYtNTViYS00Njc1LTg0NmQtNzRiNTkxNDk3OGE4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6757_AL_.jpg",
      metacriticRating: null,
      plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eos ipsum ut deleniti exercitationem laudantium ducimus sed dolorum dolores corrupti.",
      releaseState: "Sep 15, 2023",
      runtimeMins: null,
      runtimeStr: null,
      stars: "Michelle Yeoh, Kelly Reilly, Kenneth Branagh, Jamie Dornan",
      title: "A Haunting in Venice",
      year: "2023",
    },
    comingSoonTrailer:
      "https://www.imdb.com/video/imdb/vi1371587865/imdb/embed",
    test: 0,
  },
  getters: {},
  mutations: {
    set250Data(state, data) {
      state.top250 = data.items;
      // console.log(state.top250[0]);
    },
    setComingSoon(state, data) {
      state.comingSoon = data;
      console.log(state.comingSoon);
    },
    setComingSoonTrailer(state, data) {
      state.comingSoonTrailer = data;
    },
  },
  actions: {
    get250Data() {
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
    getComingSoonData() {
      axios
        .get(
          `https://imdb-api.com/en/API/ComingSoon/${process.env.VUE_APP_API_KEY}`
        )
        // .then((res) => res.json())
        // .then(console.log(data))

        .then((res) => {
          const randomMovie = res.data.items[Math.floor(Math.random() * 100)];
          this.commit("setComingSoon", randomMovie);
          this.dispatch("getComingSoonTrailer");
        })
        .catch((err) => console.log(err.message));
    },
    getComingSoonTrailer({ state }) {
      console.log(state.comingSoon.id);
      axios
        .get(
          `https://imdb-api.com/en/API/Trailer/${process.env.VUE_APP_API_KEY}/${state.comingSoon.id}`
        )
        .then((res) => {
          // this.commit("setComingSoonTrailer", randomMovie);
          console.log(res.data.linkEmbed);
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
