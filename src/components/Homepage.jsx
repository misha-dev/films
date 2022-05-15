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

  searchMovie = async (movieName) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}`
    );
    const movies = await response.json();
    this.setState({
      movies: movies.Search,
    });
  };
  componentDidMount() {
    this.searchMovie("matrix");
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
