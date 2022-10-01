import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../Loader/Loader";

import cl from "./FilmFullContent.module.css";

// {
//     "Title": "Iron Man",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "02 May 2008",
//     "Runtime": "126 min",
//     "Genre": "Action, Adventure, Sci-Fi",
//     "Director": "Jon Favreau",
//     "Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
//     "Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
//     "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
//     "Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
//     "Country": "United States, Canada",
//     "Awards": "Nominated for 2 Oscars. 21 wins & 73 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "7.9/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "94%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "79/100"
//         }
//     ],
//     "Metascore": "79",
//     "imdbRating": "7.9",
//     "imdbVotes": "1,023,580",
//     "imdbID": "tt0371746",
//     "Type": "movie",
//     "DVD": "30 Sep 2008",
//     "BoxOffice": "$319,034,126",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }
export const FilmFullContent = () => {
  const params = useParams();
  const id = params.id;
  const [film, setFilm] = useState();
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}`
    )
      .then((resp) => resp.json())
      .then((resp) => setFilm(resp));
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
