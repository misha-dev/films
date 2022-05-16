import { Component } from "react";
import Film from "./Film";
import cl from "./ListOfFilms.module.css";
import Loading from "./Loading";

export default class ListOfFilms extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster,imdbID (using as key)
  render() {
    if (typeof this.props.movies != "string") {
      return (
        <>
          {this.props.movies.length !== 0 ? (
            <div className={cl.gridWrapper}>
              {this.props.movies.map((movie) => {
                return <Film key={movie.imdbID} {...movie} />;
              })}
            </div>
          ) : (
            <Loading />
          )}
        </>
      );
    } else {
      return <div>There is no such a film:(</div>;
    }
  }
}
