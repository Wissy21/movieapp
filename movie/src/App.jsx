import {useState, useEffect} from "react";
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import "./styles.css";


function App() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

return (
  <>
      <div className="container">
          <Header></Header>
      </div>
      <MovieGrid movies={movies}/>
      <Footer />
  </>
);
}

export default App;
