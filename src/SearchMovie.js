import React , {useState, useEffect} from "react";
import axios from "./axios";


const SEARCH_API = "https://image.tmdb.org/t/p/original/search/movie?api_key=$ed69c1589196404fb511b8cd77840fcc&query=";

const base_url = "https://image.tmdb.org/t/p/original/";

function SearchRow({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState([]);
 

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request; 
    }
    fetchData();
  }, [fetchUrl]);

  async function handleSearch() {
    const response = await axios.get(
      SEARCH_API + term
    );
    console.log(response.data);
  }
 

    


 
  return (
    <>
    <form onSubmit={handleSearch}>
    <input onChange={(e) => setTerm(e.target.value)}/>
     <button>Search</button>
  </form>
    <div className="row">
      {<h2>{title}</h2>}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
    </> 
  );
}

export default SearchRow;
