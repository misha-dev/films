import { Component } from "react";
import Film from "./Film";

export default class ListOfFilms extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster,imdbID
  render() {
    return (
      <>
        {this.props.movies ? (
          this.props.movies.map((movie) => {
            return <Film key={movie.imdbID} {...movie} />;
          })
        ) : (
          <p>No films found:(</p>
        )}
      </>
    );
  }
}
