import { Component } from 'react';

import { getCurrentQuery } from '../../utils';
import { Search } from '../../components';
import { FilmsList } from '../../features';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMovieName: getCurrentQuery(),
      type: 'all',
      movies: [],
      totalPages: 0,
    };

    this.setState = this.setState.bind(this);
  }

  searchMovie = async (page = 1) => {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${this.state.searchedMovieName}&type=${this.state.type === 'all' ? '' : this.state.type}&page=${page}`;
    this.fetchController = new AbortController();
    const { signal } = this.fetchController;

    const response = await fetch(url, { signal }).catch((error) => {
      console.log(error);
    });

    if (response) {
      const movies = await response.json();
      if (movies.Response === 'False') {
        this.setState({ movies: movies.Error }, () => {});
      } else {
        this.setState({
          movies: movies.Search,
          totalPages: +movies.totalResults / 10,
        });
      }
    }
  };
  componentDidMount() {
    this.searchMovie();
  }

  componentWillUnmount() {
    this.fetchController.abort();
  }

  render() {
    return (
      <>
        <Search setSearchParams={this.setState} searchMovie={this.searchMovie} />
        <FilmsList
          movies={this.state.movies}
          searchMovie={this.searchMovie}
          searchedMovieName={this.state.searchedMovieName}
          type={this.state.type}
          setSearchParams={this.setState}
          totalPages={this.state.totalPages}
        />
      </>
    );
  }
}
