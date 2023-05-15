import { useState } from "react";
// data
import { data } from "../../store/data";
// components
import Nav from "../../components/nav/nav";
import MovieList from "../../components/list/list";
// css
import "./home.css";

function Home() {
  const [movies, setMovies] = useState(data);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  return (
    <div className="App">
      <Nav
        setMovies={setMovies}
        movies={movies}
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        rateSearch={rateSearch}
        setRateSearch={setRateSearch}
      />
      <MovieList
        movies={movies}
        nameSearch={nameSearch}
        rateSearch={rateSearch}
      />
    </div>
  );
}

export default Home;
