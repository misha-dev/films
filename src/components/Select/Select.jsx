import { Component } from "react";

import cl from "./Select.module.css";

export default class Select extends Component {
  render() {
    return (
      <div className={cl.wrapper}>
        <label>
          <input
            onChange={this.props.changeType}
            className={cl.filmType}
            value="all"
            name="filmType"
            type="radio"
            checked={this.props.type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            onChange={this.props.changeType}
            className={cl.filmType}
            value="movie"
            name="filmType"
            type="radio"
            checked={this.props.type === "movie"}
          />
          <span>Movie</span>
        </label>
        <label>
          <input
            onChange={this.props.changeType}
            className={cl.filmType}
            value="series"
            name="filmType"
            type="radio"
            checked={this.props.type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}
