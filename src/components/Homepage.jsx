import { Component } from "react";
import ListOfFilms from "./ListOfFilms";
import Search from "./Search";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "pirates",
      type: "all",
      movies: [],
      totalPages: 0,
    };

    this.setState = this.setState.bind(this);
  }

  searchMovie = async (page = 1) => {
    let response;
    // if (type !== "all" && movieName) {
    //   console.log(
    //     `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}&type=${type}&page=${page}`
    //   );
    //   response = await fetch(
    //     `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}&type=${type}&page=${page}`
    //   );
    // } else {
    //   response = await fetch(
    //     `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}&page=${page}`
    //   );
    // }

    response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${
        this.state.movieName
      }&type=${this.state.type === "all" ? "" : this.state.type}&page=${page}`
    );

    const movies = await response.json();
    // console.log(movies);
    if (movies.Response === "False") {
      this.setState({ movies: movies.Error }, () => {
        // console.log(this.state.movies);
      });
    } else {
      this.setState({
        movies: movies.Search,
        totalPages: +movies.totalResults / 10,
      });
    }
  };
  componentDidMount() {
    this.searchMovie();
  }

  render() {
    return (
      <>
        <Search
          setSearchParams={this.setState}
          searchMovie={this.searchMovie}
        />
        <ListOfFilms
          movies={this.state.movies}
          searchMovie={this.searchMovie}
          movieName={this.state.movieName}
          type={this.state.type}
          setSearchParams={this.setState}
          totalPages={this.state.totalPages}
        />
      </>
    );
  }
}
