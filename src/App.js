import "./App.css";
import { MovieData } from "./component/MovieData";
import { useState } from "react";
import Navbarm from "./component/Navbarm";
import MovieList from "./component/MovieList";

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  return (
    <div className="App">
      <Navbarm
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

export default App;
