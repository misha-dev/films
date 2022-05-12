import { Component } from "react";
import cl from "./Loading.module.css";

export default class Loading extends Component {
  render() {
    return (
      <div className={cl.loading}>
        <div className={cl.loader}></div>
      </div>
    );
  }
}
