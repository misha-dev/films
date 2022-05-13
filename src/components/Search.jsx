import { Component } from "react";
import cl from "./Search.module.css";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleEnter = (e) => {
    if (e.key === "Enter") {
    }
  };
  render() {
    return (
      <div className={cl.wrapperSearch}>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          size={30}
          placeholder="Enter movie name"
        />
      </div>
    );
  }
}
