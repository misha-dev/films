import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../Loader/Loader";

import cl from "./FilmFullContent.module.css";

export const FilmFullContent = () => {
  const params = useParams();
  const id = params.id;
  const [film, setFilm] = useState();
  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}`;
  useEffect(() => {
    const fetchController = new AbortController();
    const { signal } = fetchController;
    fetch(url, signal)
      .then((resp) => resp.json())
      .then((resp) => setFilm(resp));

    return () => {
      fetchController.abort();
    };
  }, [id]);

  // @ts-ignore
  return (
    <>
      {film ? (
        <div className={cl.wrapperMain}>
          <div className={cl.wrapperData}>
            <img
              src={
                // @ts-ignore
                film.Poster
              }
              alt=""
            />

            <div className={cl.info}>
              <div className={cl.title}>
                {
                  // @ts-ignore
                  film.Title
                }
              </div>
              {/* <div className={`${cl.item} ${cl.ratings}`}>
                Ratings:
                {film.Ratings?.map((rating, index) => {
                  return (
                    <div className={cl.rating} key={index}>
                      {rating.Source} : {rating.Value}
                    </div>
                  );
                })}
              </div> */}

              <div className={`${cl.item} ${cl.plot}`}>
                Plot:{" "}
                {
                  // @ts-ignore
                  film.Plot
                }
              </div>
              <div className={`${cl.item} ${cl.rated}`}>
                Rated:{" "}
                {
                  // @ts-ignore
                  film.Rated
                }
              </div>
              <div className={`${cl.item} ${cl.awards}`}>
                Awards:{" "}
                {
                  // @ts-ignore
                  film.Awards
                }
              </div>
              <div className={`${cl.item} ${cl.actors}`}>
                Actors:{" "}
                {
                  // @ts-ignore
                  film.Actors
                }
              </div>
              <div className={`${cl.item} ${cl.writer}`}>
                Writer:{" "}
                {
                  // @ts-ignore
                  film.Writer
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
