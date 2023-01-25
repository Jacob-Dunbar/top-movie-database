import { createStore } from "vuex";
import axios from "axios";

function removeThe(title) {
  if (
    title.charAt(0) === "T" &&
    title.charAt(1) === "H" &&
    title.charAt(2) === "E" &&
    title.charAt(3) === " "
  ) {
    return title.slice(4);
  } else {
    console.log("not");
    return title;
  }
}

export default createStore({
  state: {
    top250: [],
    comingSoon: null,
    comingSoonPoster: "",
    trailerUrl: "",
    showTrailerModal: false,
    movieDetailsId: "tt0111161",
    movieDetails: null,
    movieReviews: [
      {
        content:
          "The Shawshank Redemption is written and directed by Frank Darabont. It is an adaptation of the Stephen King novella Rita Hayworth and Shawshank Redemption. Starring Tim Robbins and Morgan Freeman, the film portrays the story of Andy Dufresne (Robbins), a banker who is sentenced to two life sentences at Shawshank State Prison for apparently murdering his wife and her lover. Andy finds it tough going but finds solace in the friendship he forms with fellow inmate Ellis \"Red\" Redding (Freeman). While things start to pick up when the warden finds Andy a prison job more befitting his talents as a banker. However, the arrival of another inmate is going to vastly change things for all of them.There was no fanfare or bunting put out for the release of the film back in 94, with a title that didn't give much inkling to anyone about what it was about, and with Columbia Pictures unsure how to market it, Shawshank Redemption barely registered at the box office. However, come Academy Award time the film received several nominations, and although it won none, it stirred up interest in the film for its home entertainment release. The rest, as they say, is history. For the film finally found an audience that saw the film propelled to almost mythical proportions as an endearing modern day classic. Something that has delighted its fans, whilst simultaneously baffling its detractors. One thing is for sure, though, is that which ever side of the Shawshank fence you sit on, the film continues to gather new fans and simply will never go away or loose that mythical status.It's possibly the simplicity of it all that sends some haters of the film into cinematic spasms. The implausible plot and an apparent sentimental edge that makes a nonsense of prison life, are but two chief complaints from those that dislike the film with a passion. Yet when characters are this richly drawn, and so movingly performed, it strikes me as churlish to do down a human drama that's dealing in hope, friendship and faith. The sentimental aspect is indeed there, but that acts as a counterpoint to the suffering, degradation and shattering of the soul involving our protagonist. Cosy prison life you say? No chance. The need for human connection is never more needed than during incarceration, surely? And given the quite terrific performances of Robbins (never better) & Freeman (sublimely making it easy), it's the easiest thing in the world to warm to Andy and Red.Those in support aren't faring too bad either. Bob Gunton is coiled spring smarm as Warden Norton, James Whitmore is heart achingly great as the \"Birdman Of Shawshank,\" Clancy Brown is menacing as antagonist Capt. Byron Hadley, William Sadler amusing as Heywood & Mark Rolston is impressively vile as Bogs Diamond. Then there's Roger Deakins' lush cinematography as the camera gracefully glides in and out of the prison offering almost ethereal hope to our characters (yes, they are ours). The music pings in conjunction with the emotional flow of the movie too. Thomas Newman's score is mostly piano based, dovetailing neatly with Andy's state of mind, while the excellently selected soundtrack ranges from the likes of Hank Williams to the gorgeous Le Nozze di Figaro by Mozart.If you love Shawshank then it's a love that lasts a lifetime. Every viewing brings the same array of emotions - anger - revilement - happiness - sadness - inspiration and a warmth that can reduce the most hardened into misty eyed wonderment. Above all else, though, Shawshank offers hope - not just for characters in a movie - but for a better life and a better world for all of us. 10/10.",
        date: "24 July 2010",
        helpful: "841 out of 908 found this helpful.",
        rate: "10",
        reviewLink: "https://www.imdb.com/review/rw2284594",
        title: "Some birds aren't meant to be caged.",
        userUrl: "https://www.imdb.com/user/ur16161013",
        username: "hitchcockthelegend",
        warningSpoilers: true,
      },
      {
        content:
          "It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.The ultimate story of friendship, of hope, and of life, and overcoming adversity.I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.",
        date: "17 February 2021",
        helpful: "146 out of 158 found this helpful.",
        rate: "10",
        reviewLink: "https://www.imdb.com/review/rw6606154",
        title: "An incredible movie. One that lives with you.",
        userUrl: "https://www.imdb.com/user/ur15311310",
        username: "Sleepin_Dragon",
        warningSpoilers: false,
      },
      {
        content:
          "I'm trying to save you money; this is the last film title that you should consider borrowing. Renting Shawshank will cost you five bucks... just plunk down the $25 and own the title. You'll wind up going back to this gem time and time again. This is one of few movies that are truly timeless. And it's entertaining and moving, no matter how many times you view it.Forget about what others (including myself) might suggest you'll discover in \"The Shawshank Redemption;\" when you watch it, you'll identify something very personal in your own life with a scene, a character, or a moment in this uncomplicated movie. When you need hope, you'll look for Shawshank. When you want to believe in the will of overcoming even the greatest obstacles, Shawshank will uplift you in ways that you can't find in movies today. Some liken the film to some kind of spiritual awakening. Of course, some can go to a church or mosque to find enlightenment and Faith in humanity, but most places of worship are open only certain days or times. But when you need affirmation of the lasting bond of friendships that prevail over the most dire circumstances, Shawshank will give it to you. It makes grown men (like me) cry, still. I wonder whether Shawshank was truly meant for viewing in the privacy of the home, because it is a personal experience that really makes you look inward. Nominated for seven, this is the best film that never one a single Oscar. How ironic that an innocent man winds up being surrounded by the corruption of the legal system. Shawshank itself is similar to the character of Andy Dufresne. Prejudging this classic film, critics couldn't get past the title. The public followed suit, initially dismissing Shawshank, which failed in the box office just like \"It's a Wonderful Life\" and \"Citizen Kane.\" It could have just whithered away on the store shelves, like Andy Dufresne could have in his own cell. But the characters prevailed, because Andy -- And Shawshank -- stayed true. Now, these movies are right up there as the most popular films of all time. Anyone who has yet to watch Shawshank may be so jaded of movies, or the film's title, or how a 2-1/2- hour movie set inside the walls of a prison can manage to tap the soul of such a wide range of people. Shawshank has not one explosion. I wonder if it even has a single special effect or digitally- enhanced frame. But every aspect of Shawshank fit together. The acting from the top to the bit part. The musical score. The editing. The photography. The story, from opening credits to final scene. All involved, including the town of Mansfield, Ohio (where Shawshank was actually filmed) played their roles perfectly. Shawshank is a must- see, must- own title.",
        date: "21 November 2005",
        helpful: "813 out of 912 found this helpful.",
        rate: "10",
        reviewLink: "https://www.imdb.com/review/rw1221355",
        title: "Don't Rent Shawshank.",
        userUrl: "https://www.imdb.com/user/ur0265899",
        username: "EyeDunno",
        warningSpoilers: false,
      },
    ],
    limitedReviews: [],
    reviewsLimit: 3,
  },
  getters: {},
  mutations: {
    set250Data(state, data) {
      state.top250 = data.items;
    },
    setComingSoon(state, data) {
      state.comingSoon = data;
    },
    clearComingSoon(state) {
      state.comingSoon = null;
    },
    setComingSoonPoster(state, data) {
      state.comingSoonPoster = data.posters[0].link;
    },
    clearComingSoonPoster(state) {
      state.comingSoonPoster = "";
    },
    setTrailerUrl(state, data) {
      state.trailerUrl = data;
    },
    showTrailerModal(state) {
      state.showTrailerModal = true;
    },
    hideTrailerModal(state) {
      state.showTrailerModal = false;
    },
    sortByRank(state) {
      state.top250 = state.top250.sort((a, b) => a.rank - b.rank);
    },
    sortByTitle(state) {
      state.top250 = state.top250.sort((a, b) => {
        let titleA = removeThe(a.title.toUpperCase());
        let titleB = removeThe(b.title.toUpperCase());

        if (titleA < titleB) return -1;
        if (titleA < titleB) return 1;
        return 0;
      });
    },
    setMovieDetailsId(state, id) {
      state.movieDetailsId = id;
    },
    setMovieDetails(state, data) {
      state.movieDetails = data;
    },
    clearMovieDetails(state) {
      state.movieDetails = null;
    },

    setMovieReviews(state, data) {
      state.movieReviews = data;
    },
    setLimitedReviews(state) {
      state.limitedReviews = state.movieReviews.slice(0, state.reviewsLimit);
      console.log(state.limitedReviews);
    },
    increaseReviewsLimit(state) {
      state.reviewsLimit = state.reviewsLimit + 3;
      console.log(state.reviewsLimit);
    },
    resetReviewsLimit(state) {
      state.reviewsLimit = 3;
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
      this.commit("clearComingSoon");
      this.commit("clearComingSoonPoster");
      axios
        .get(
          `https://imdb-api.com/en/API/ComingSoon/${process.env.VUE_APP_API_KEY}`
        )

        .then((res) => {
          const randomMovie = res.data.items[Math.floor(Math.random() * 100)];
          this.commit("setComingSoon", randomMovie);
          this.dispatch("getComingSoonPoster");
          this.dispatch("getComingSoonTrailer");
        })
        .catch((err) => console.log(err.message));
    },
    getComingSoonPoster({ state }) {
      axios
        .get(
          `https://imdb-api.com/en/API/Posters/${process.env.VUE_APP_API_KEY}/${state.comingSoon.id}`
        )
        .then((res) => {
          console.log(res);
          this.commit("setComingSoonPoster", res.data);
        })
        .catch((err) => console.log(err.message));
    },

    getComingSoonTrailer({ state }) {
      axios
        .get(
          `https://imdb-api.com/en/API/Trailer/${process.env.VUE_APP_API_KEY}/${state.comingSoon.id}`
        )
        .then((res) => {
          console.log(res);
          this.commit("setTrailerUrl", res.data);
        })
        .catch((err) => console.log(err.message));
    },
    getMovieDetails({ state }) {
      axios
        .get(
          `https://imdb-api.com/en/API/Title/${process.env.VUE_APP_API_KEY}/${state.movieDetailsId}/images`
        )

        .then((res) => {
          this.commit("setMovieDetails", {
            poster: res.data.image,
            title: res.data.title,
            year: res.data.year,
            rating: res.data.imDbRating,
            votes: res.data.imDbRatingVotes,
            plot: res.data.plot,
            images: res.data.images.items,
            cast: res.data.actorList,
          });
        })
        .catch((err) => console.log(err.message));
    },
    getMovieReviews({ state }) {
      axios
        .get(
          `https://imdb-api.com/en/API/Reviews/${process.env.VUE_APP_API_KEY}/${state.movieDetailsId}`
        )
        .then((res) => {
          this.commit("setMovieReviews", res.data.items);
          this.commit("setLimitedReviews");
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
