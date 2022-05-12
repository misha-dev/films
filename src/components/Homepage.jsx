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
    const movieNames = [
      "man",
      "ginger",
      "beast",
      "green",
      "orange",
      "dance",
      "happiness",
      "carry",
      "hate",
      "singer",
      "dancer",
      "wolf",
      "sin",
      "trigger",
      "master",
      "club",
      "king",
      "game",
      "order",
      "war",
    ];
    const movies = [];
    for (let i = 0; i < movieNames.length; i++) {
      const movieName = movieNames[i];
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&t=${movieName}`
      );
      const movie = await response.json();
      movies.push(movie);
    }
    this.setState({ movies });
  }
  render() {
    return <ListOfFilms movies={this.state.movies} />;
  }
}
