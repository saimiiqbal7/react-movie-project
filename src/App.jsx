import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  
  return(
    <>
      <MovieCard
        movie= {{
          title: "Saim",
          releaseDate: 2025,

        }}
      />

      <MovieCard
        movie= {{
          title: "Alishba",
          releaseDate: 2026,

        }}
      />
    </>
   
  )

}

export default App
