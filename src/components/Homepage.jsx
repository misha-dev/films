import { Component } from "react";
import ListOfFilms from "./ListOfFilms";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    const movieName = "matrix";
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${movieName}`
    );
    const movies = await response.json();
    console.log(movies.Search);
    this.setState({ movies: movies.Search }); 
  }
  render() {
    return <ListOfFilms movies={this.state.movies} />;
  }
}
