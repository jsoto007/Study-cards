import React from "react";

function MovieCard( {movies } ) {
    const { title, poster } = movies
    return (
        <div>
            <li>{title}</li>
            <img src={poster} alt={title} />
        </div>
    )
}

export default MovieCard;