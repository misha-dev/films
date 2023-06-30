import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '../../components';

import cl from './FilmContentPage.module.css';

export const FilmContentPage = () => {
  const params = useParams();
  const id = params.id;
  const [film, setFilm] = useState();
  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}`;
  useEffect(() => {
    const fetchController = new AbortController();
    const { signal } = fetchController;
    fetch(url, { signal })
      .then((resp) => resp.json())
      .then((resp) => setFilm(resp))
      .catch(() => {});

    return () => {
      fetchController.abort();
    };
  }, [id, url]);

  return (
    <>
      {film ? (
        <div className={cl.wrapperMain}>
          <div className={cl.wrapperData}>
            <img src={film.Poster} alt="" />

            <div className={cl.info}>
              <div className={cl.title}>{film.Title}</div>
              <div className={`${cl.item} ${cl.plot}`}>Plot: {film.Plot}</div>
              <div className={`${cl.item} ${cl.rated}`}>Rated: {film.Rated}</div>
              <div className={`${cl.item} ${cl.awards}`}>Awards: {film.Awards}</div>
              <div className={`${cl.item} ${cl.actors}`}>Actors: {film.Actors}</div>
              <div className={`${cl.item} ${cl.writer}`}>Writer: {film.Writer}</div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
