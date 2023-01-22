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
    trailerUrl: "https://www.imdb.com/video/imdb/vi1371587865/imdb/embed",
    showTrailerModal: false,
    movieDetailsId: "tt0111161",
    movieDetails: {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6762_AL_.jpg",
      title: "The Shawshank Redemption",
      year: "1994",
      rating: "9.3",
      votes: "2684692",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      images: [
        {
          title:
            "Morgan Freeman, William Sadler, Larry Brandenburg, Neil Giuntoli, Brian Libby, David Proval, and Joseph Ragno in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title:
            "Clancy Brown, Dion Anderson, and Brian Delate in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTk3NDE2Nzg3Nl5BMl5BanBnXkFtZTcwNTMxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTkzMTY0MjE5MV5BMl5BanBnXkFtZTcwODMxNDY3Mw@@._V1_Ratio1.5200_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_Ratio1.4800_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman, Gil Bellows, and Brian Libby in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTgxMTU1MDkwOV5BMl5BanBnXkFtZTcwMDQxNDY3Mw@@._V1_Ratio1.4800_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQ5NTI4NDAxMV5BMl5BanBnXkFtZTcwMTQxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title:
            "Larry Brandenburg, David Proval, and Joseph Ragno in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTMyODE3NTM1Ml5BMl5BanBnXkFtZTcwMzQxNDY3Mw@@._V1_Ratio1.4800_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman, William Sadler, Larry Brandenburg, Neil Giuntoli, Brian Libby, David Proval, and James Whitmore in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTMxNzAwMzE0Nl5BMl5BanBnXkFtZTcwNDQxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTg3Nzg3ODU0NV5BMl5BanBnXkFtZTcwNTQxNDY3Mw@@._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "James Whitmore in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_Ratio1.6000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTg4MDA2MDM5Nl5BMl5BanBnXkFtZTcwOTU5MTQ2Mg@@._V1_Ratio1.4600_AL_.jpg",
        },
        {
          title: "Frank Darabont in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTkzMDA1OTUxNF5BMl5BanBnXkFtZTcwMzMxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title:
            "Tim Robbins, Frank Darabont, and James Whitmore in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTgzOTc3Njc0Nl5BMl5BanBnXkFtZTcwNzMxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Frank Darabont in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTM0NzQ1Nzg2N15BMl5BanBnXkFtZTcwMjQxNDY3Mw@@._V1_Ratio1.5200_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BOWJlYjkzNDgtZDI1NS00YTkwLTgxNGItZDYzZDcxNWRjNDA2XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMzJkNjNiOWUtYzNmOC00MGFjLWE5N2EtMjdkYjEwMzQ4NzBhXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZjk5M2JhZTYtMTNjZS00YTJhLThlZWYtYTAyYTVhYWFiMTExXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTA1MjE0Nzk4MDleQTJeQWpwZ15BbWU4MDA0NjIxMjAx._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman, Tim Robbins, Clancy Brown, Gil Bellows, Bob Gunton, and James Whitmore in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc4NjY5OTYyM15BMl5BanBnXkFtZTgwMTQ2MjEyMDE@._V1_Ratio1.3200_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BNzUzNzI0MjAxMl5BMl5BanBnXkFtZTgwMjQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTc2MjMxNzIyMF5BMl5BanBnXkFtZTgwNDQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc0NDA0NzU5NF5BMl5BanBnXkFtZTgwNTQ2MjEyMDE@._V1_Ratio1.3200_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTcxMDAzNTcwM15BMl5BanBnXkFtZTgwNjQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTcxMjg2MzA0OV5BMl5BanBnXkFtZTgwNzQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQyMTAzNDMwNF5BMl5BanBnXkFtZTgwODQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman, Tim Robbins, Clancy Brown, Gil Bellows, Bob Gunton, and James Whitmore in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTU1NTUwMjQxN15BMl5BanBnXkFtZTgwOTQ2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQ1ODM2MjY3OV5BMl5BanBnXkFtZTgwMTU2MjEyMDE@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc3NjM4MTY3MV5BMl5BanBnXkFtZTcwODk4Mzg3OA@@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTIyODQ2MjgxOF5BMl5BanBnXkFtZTYwMzUzODQ5._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTcxMzgyNzk2Ml5BMl5BanBnXkFtZTcwNDEzNTkyMQ@@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZGVmZjg5NTEtMjJhNS00OWJjLThjOTYtZTk0NjUwMjA3MjkyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.5400_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYWI5ZDgyZTctMGJhYi00MjcxLThmZTQtMTA4MzViMGQ0YWJmXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.0000_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZDJiNmM0YTctYTU1ZS00MDAwLTkyOTQtMDUwZDFiZTk4Y2MzXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZTg3MDUxOGMtOWEzOS00YzUwLTkwOWYtNmUwNzg1Mzg5MzMyXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Clancy Brown in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BODMyZDZlNjQtMjQxYi00NDE1LTljMmMtZTZmYzZjNTg5NTkyXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTIwOTViNTMtNGIzYi00YWFmLWI5ZjAtMmJlNmViODM3YmIwXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BOGRlNGRkM2QtZTUwZS00M2U4LThlZDQtZWQzNzg4NjRiMGM1XkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZGVhMGZiN2YtZDNiMy00NmRhLWEzOTQtN2QyMGYwNmU3MjI4XkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYWNkZWZhMGUtMTQwZC00NTYxLThiODItYmM5MGZiOWMwYjQ4XkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZDJhMjU0MWUtYTIxMi00MGU1LWFlNzItODU2YTZiNDdjZDMxXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYjU3YzYwYjYtNjZmMy00M2M0LTg0NjYtMGZiZGI2YzY4OTYwXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BNzg2NGM3MmEtZTc4Mi00NTMzLWJjM2QtMmE5YWFjNWZhNmMwXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTY2ZDUwYjUtZTE3MC00ODc4LWE5MmEtOTAxZjNmYTkyOTQzXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Morgan Freeman in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BMGI0MWVjYjgtZTM2ZC00ZThlLWJmODAtYjZhOTY2YzJhYjBkXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title:
            "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BY2UyMmY3YTMtYzkyYi00M2FkLWI1NWQtNDQzYzdhZDllYjNlXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
        {
          title: "Tim Robbins in The Shawshank Redemption (1994)",
          image:
            "https://m.media-amazon.com/images/M/MV5BZDZmMjdjMGItNWUwYi00NmUwLTgzZjItNjBiODM4NTYwZTQ5XkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_Ratio1.7800_AL_.jpg",
        },
      ],
      cast: [
        {
          id: "nm0000209",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_Ratio1.0000_AL_.jpg",
          name: "Tim Robbins",
          asCharacter: "Andy Dufresne",
        },
        {
          id: "nm0000151",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_Ratio1.0000_AL_.jpg",
          name: "Morgan Freeman",
          asCharacter: "Ellis Boyd 'Red' Redding",
        },
        {
          id: "nm0348409",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjUyZDQ0NjktZmM5ZS00NzcxLTliMWYtNWUxNDcyMmExZjU0XkEyXkFqcGdeQXVyMTE1MjA4NzM@._V1_Ratio1.0000_AL_.jpg",
          name: "Bob Gunton",
          asCharacter: "Warden Norton",
        },
        {
          id: "nm0006669",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTA1NjU3NDg1MTheQTJeQWpwZ15BbWU2MDI4OTcxMw@@._V1_Ratio1.0000_AL_.jpg",
          name: "William Sadler",
          asCharacter: "Heywood",
        },
        {
          id: "nm0000317",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTUxODY3NjAzMF5BMl5BanBnXkFtZTcwMTQ5MjYwNg@@._V1_Ratio1.0000_AL_.jpg",
          name: "Clancy Brown",
          asCharacter: "Captain Hadley",
        },
        {
          id: "nm0004743",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTgxMzc0MDAzNV5BMl5BanBnXkFtZTgwMzUzMTI0MzE@._V1_Ratio1.0000_AL_.jpg",
          name: "Gil Bellows",
          asCharacter: "Tommy",
        },
        {
          id: "nm0001679",
          image:
            "https://m.media-amazon.com/images/M/MV5BODE5NDRlZTctMjkzNC00NGY3LThhYTItNzUxZjgzYzFmMjQxXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio1.0000_AL_.jpg",
          name: "Mark Rolston",
          asCharacter: "Bogs Diamond",
        },
        {
          id: "nm0926235",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTg5MzkxMTkxOV5BMl5BanBnXkFtZTcwNTEzNTgxMw@@._V1_Ratio1.0000_AL_.jpg",
          name: "James Whitmore",
          asCharacter: "Brooks Hatlen",
        },
        {
          id: "nm0218810",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQ0Mjc3NDA1OV5BMl5BanBnXkFtZTcwMTg3MDEyOA@@._V1_Ratio1.0000_AL_.jpg",
          name: "Jeffrey DeMunn",
          asCharacter: "1946 D.A.",
        },
        {
          id: "nm0104594",
          image:
            "https://m.media-amazon.com/images/M/MV5BNDczZGZiZjMtZGRmMC00Y2I5LThiNzAtZGQzZWYzZWFiNzM0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
          name: "Larry Brandenburg",
          asCharacter: "Skeet",
        },
        {
          id: "nm0321358",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjI0OTUxNjIyNF5BMl5BanBnXkFtZTcwNDE0MDcwOA@@._V1_Ratio1.0000_AL_.jpg",
          name: "Neil Giuntoli",
          asCharacter: "Jigger",
        },
        {
          id: "nm0508742",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjI2NDYwNzU0NV5BMl5BanBnXkFtZTcwMjYwMTcwOA@@._V1_Ratio1.0000_AL_.jpg",
          name: "Brian Libby",
          asCharacter: "Floyd",
        },
        {
          id: "nm0698998",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjE0MTU0NjU3Nl5BMl5BanBnXkFtZTYwNTgzNjY0._V1_Ratio1.0000_AL_.jpg",
          name: "David Proval",
          asCharacter: "Snooze",
        },
        {
          id: "nm0706554",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQyNzMyNTUwNV5BMl5BanBnXkFtZTcwNjQ2MTcwOA@@._V1_Ratio1.0000_AL_.jpg",
          name: "Joseph Ragno",
          asCharacter: "Ernie",
        },
        {
          id: "nm0161980",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjZmOTU1ZDktNDdkZi00YjkxLWFiODYtMjUzZWVhYmFiYjIxXkEyXkFqcGdeQXVyMTI3MzAzOTM@._V1_Ratio1.0000_AL_.jpg",
          name: "Jude Ciccolella",
          asCharacter: "Guard Mert",
        },
        {
          id: "nm0005204",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTI2Mjc1NzExN15BMl5BanBnXkFtZTYwNjUzMzQz._V1_Ratio1.0000_AL_.jpg",
          name: "Paul McCrane",
          asCharacter: "Guard Trout",
        },
        {
          id: "nm0086169",
          image: "https://imdb-api.com/images/original/nopicture.jpg",
          name: "Renee Blaine",
          asCharacter: "Andy Dufresne's Wife",
        },
        {
          id: "nm0542957",
          image: "https://imdb-api.com/images/original/nopicture.jpg",
          name: "Scott Mann",
          asCharacter: "Glenn Quentin",
        },
      ],
    },
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
      // console.log(state.top250[0]);
    },
    setComingSoon(state, data) {
      state.comingSoon = data;
      console.log(state.comingSoon);
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
          // this.commit("setTrailerUrl", res.data.linkEmbed);
          console.log(res.data.linkEmbed);
        })
        .catch((err) => console.log(err.message));
    },
    getMovieDetails({ state }) {
      axios
        .get(
          `https://imdb-api.com/en/API/Title/${process.env.VUE_APP_API_KEY}/${state.movieDetailsId}/images`
        )
        // .then((res) => res.json())
        // .then(console.log(data))

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
