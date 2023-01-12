
import './App.css';
import MovieCard from "./MovieCard"

// How to iterate through an Array to render multiple
function App() {

  const movies = [
    {
        title: "Avatar",
        poster: "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989"

    },
    {
        title: "I Am Legend",
        poster: "https://ajmoviefreak.com/wp-content/uploads/2020/10/91Xmg5sQQZL._AC_SL1500_.jpg"
    }
]

  return (
    <div className="App">
      <header>
        {
          movies.map((movie) => {
            return (
              <MovieCard movies={movie} key={movie.title} />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
