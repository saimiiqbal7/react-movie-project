import './App.css'
import MovieCard from './components/MovieCard'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"

function App() {
  
  return(
    <main className='main-content'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorite/>}/>
      </Routes>

    </main>
   
  )

}

export default App
