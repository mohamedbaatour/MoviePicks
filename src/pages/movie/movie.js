import React from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import { data } from "../../store/data";

const Movie = () => {
  const { id } = useParams();
  return <div>{data[id - 1].name}</div>;
};

export default Movie;
