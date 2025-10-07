
import MovieCard from "../components/MovieCard"
import { useState } from "react"

export default function Home(){

    const [searchQuery, setSearchQuery] = useState("")

   const movies = [
  { id: 1, name: "Inception", releaseDate: "2010-07-16" },
  { id: 2, name: "The Dark Knight", releaseDate: "2008-07-18" },
  { id: 3, name: "Interstellar", releaseDate: "2014-11-07" },
  { id: 4, name: "Parasite", releaseDate: "2019-05-30" },
  { id: 5, name: "Avengers: Endgame", releaseDate: "2019-04-26" },
  { id: 6, name: "Titanic", releaseDate: "1997-12-19" },
  { id: 7, name: "The Matrix", releaseDate: "1999-03-31" },
  { id: 8, name: "Gladiator", releaseDate: "2000-05-05" },
  { id: 9, name: "The Godfather", releaseDate: "1972-03-24" },
  { id: 10, name: "Joker", releaseDate: "2019-10-04" }
];

    const handleSearch = (e) => {

        e.preventDefault()
        alert(searchQuery)

    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for Movies"
                className="search-input"
                value={searchQuery}
                onChange={ e => setSearchQuery(e.target.value) }
            />
            <button type="submit" className="search-button">Search</button>
        </form>
 
        <div className="movies-grid">
            {movies.map(movie => {
                return (<MovieCard
                movie= {movie}
                key={movie.id}
                />)
        })}
            
        </div>
    </div>

}