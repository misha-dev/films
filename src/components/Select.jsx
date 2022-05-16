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
            value=""
            name="filmType"
            type="radio"
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
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}
