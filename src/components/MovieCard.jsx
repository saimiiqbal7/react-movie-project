
export default function MovieCard({movie}){

    function onFavorite(){
        alert("working button")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="">
                    <button className="favorite-btn" onClick={onFavorite}>♥︎</button>
                </div>

            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
            
        </div>
    )
}
