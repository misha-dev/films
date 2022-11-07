import { Component } from "react";

import ListOfFilms from "../ListOfFilms/ListOfFilms";
import Search from "../Search/Search";

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
    this.fetchContoller = new AbortController();
  }

  searchMovie = async (page = 1) => {


    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${this.state.movieName}&type=${this.state.type === "all" ? "" : this.state.type}&page=${page}`);

    const movies = await response.json();
    if (movies.Response === "False") {
      this.setState({ movies: movies.Error }, () => {});
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
        <Search setSearchParams={this.setState} searchMovie={this.searchMovie} />
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
