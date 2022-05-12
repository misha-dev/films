import { Component } from "react";
import Film from "./Film";
import cl from "./ListOfFilms.module.css";
import Loading from "./Loading";

export default class ListOfFilms extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster,imdbID (using as key)
  render() {
    return (
      <div className={cl.gridWrapper}>
        {this.props.movies.length !== 0 ? (
          this.props.movies.map((movie) => {
            return <Film key={movie.imdbID} {...movie} />;
          })
        ) : (
          <Loading />
        )}

        {/* <Loading /> */}
      </div>
    );
  }
}
