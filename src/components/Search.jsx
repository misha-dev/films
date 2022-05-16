import React, { Component } from "react";
import cl from "./Search.module.css";
import Select from "./Select";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "",
    };

    // this.setState = this.setState.bind(this);

    this.refToInput = React.createRef();
  }

  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
      this.setState({ search: "", type: "" });
      this.refToInput.current.blur();
    }
  };

  handleClick = (e) => {
    this.props.searchMovie(this.state.search, this.state.type);
    this.setState({ search: "" });
    this.refToInput.current.blur();
  };

  changeType = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <>
        <div className={cl.wrapperSearch}>
          <input
            ref={this.refToInput}
            type="text"
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            value={this.state.search}
            onKeyUp={(e) => {
              this.handleEnter(e);
            }}
            size={30}
            placeholder="Enter movie name"
          />

          <button
            onClick={this.handleClick}
            style={{ marginLeft: "10px" }}
            className="buttonGreen"
          >
            Search
          </button>
        </div>
        <Select changeType={this.changeType} />
      </>
    );
  }
}
