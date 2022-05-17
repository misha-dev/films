import { Component } from "react";
import ListOfFilms from "./ListOfFilms";
import Search from "./Search";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  searchMovie = async (movieName, type = "all") => {
    let response;
    if (type !== "all" && movieName) {
      console.log(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}&type=${type}`
      );
      response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}&type=${type}`
      );
    } else {
      response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}`
      );
    }

    const movies = await response.json();
    if (movies.Response === "False") {
      this.setState({ movies: movies.Error });
    } else {
      this.setState((prevState) => {
        return {
          movies: movies.Search,
        };
      });
    }
  };
  componentDidMount() {
    this.searchMovie("pirates");
  }
  render() {
    return (
      <>
        <Search searchMovie={this.searchMovie} />
        <ListOfFilms movies={this.state.movies} />
      </>
    );
  }
}
