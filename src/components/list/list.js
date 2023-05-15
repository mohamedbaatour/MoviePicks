import React from "react";
import Card from "../card/card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {Link} from "react-router-dom"

const List = ({ movies, nameSearch, rateSearch }) => {
  const [parent] = useAutoAnimate(/* optional config */);

  const search = () => {
    return movies.filter((film) => {
      return rateSearch === 0 && nameSearch.length === 0
        ? movies
        : rateSearch === 0
        ? film.name.toLowerCase().includes(nameSearch.toLowerCase())
        : Number(film.rating) === rateSearch &&
          film.name.toLowerCase().includes(nameSearch.toLowerCase());
    });
  };
  return (
    <div
      ref={parent}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        background: "black",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      {search().map((movie) => {
        return (
          <Link to={"/movie/" + movie.id}>
            <Card movie={movie} key={movie.id} />
          </Link>
        );


      })}
    </div>
  );
};

export default List;
