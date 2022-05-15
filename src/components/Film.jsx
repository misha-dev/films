import { Component } from "react";
import { Link } from "react-router-dom";

import cl from "./Film.module.css";

export default class Film extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster

  render() {
    return (
      <div className={cl.card}>
        <Link to={`/${this.props.imdbID}`}>
          <img className={cl.poster} src={this.props.Poster} alt="" />
        </Link>
        <div className={cl.filmTitle}>{this.props.Title}</div>

        <div className={cl.wrapperMain}>
          <div className={cl.type}>{this.props.Type}</div>
          <div className={cl.year}>{this.props.Year}</div>
        </div>
      </div>
    );
  }
}
