import React, { Component } from 'react';

import Film from '../../components/Film/Film';

import Loading from '../../components/Loader/Loader';

import cl from './FilmsList.module.css';

export default class FilmsList extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster,imdbID (using as key)
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.observerRef = React.createRef();
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && this.state.page <= this.props.totalPages) {
          this.observer.unobserve(entry.target);
          console.log(this.state.page);
          this.setState({ page: this.state.page + 1 }, async () => {
            const response = await fetch(
              `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${this.props.movieName}&type=${this.props.type === 'all' ? '' : this.props.type}&page=${this.state.page}`
            );

            const movies = await response.json();
            if (movies.Response === 'False') {
              this.props.searchMovie({ movies: movies.Error });
            } else {
              const addedMovies = [...this.props.movies, ...movies.Search];
              this.props.setSearchParams({ movies: addedMovies });
            }
          });
        }
      });
    }, {});
  }

  componentDidMount() {}

  componentDidUpdate() {
    setTimeout(() => {
      this.observer.observe(this.observerRef.current);
    }, 300);
  }

  render() {
    if (typeof this.props.movies != 'string' && this.props.movies) {
      return (
        <>
          {this.props.movies.length !== 0 ? (
            <>
              <div className={cl.gridWrapper}>
                {this.props.movies.map((movie) => {
                  return <Film key={movie.imdbID} {...movie} />;
                })}
              </div>
              <div ref={this.observerRef} className={cl.observer}></div>
            </>
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
