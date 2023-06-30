import React, { Component } from 'react';

import { getCurrentQuery, setCurrentQuery } from '../../utils';

import Select from '../Select/Select';

import cl from './Search.module.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: getCurrentQuery(),
      type: 'all',
    };

    this.refToInput = React.createRef();
  }

  handleSubmit = () => {
    setCurrentQuery(this.state.search);
    this.props.setSearchParams(
      {
        searchedMovieName: this.state.search,
        type: this.state.type,
      },
      () => {
        this.props.searchMovie();
      }
    );
    this.props.searchMovie();
    this.refToInput.current.blur();
  };

  changeType = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}
          className={cl.wrapperSearch}
        >
          <input
            ref={this.refToInput}
            type="text"
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            value={this.state.search}
            size={30}
            placeholder="Enter movie name"
          />

          <button type="submit" style={{ marginLeft: '10px' }} className="buttonGreen">
            Search
          </button>
        </form>
        <Select changeType={this.changeType} type={this.state.type} />
      </>
    );
  }
}
