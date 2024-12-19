import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'X-MEN', description: 'X-Men is a 2000 American superhero film directed by Bryan Singer from a screenplay by David Hayter and a story by Singer and Tom DeSanto', posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg', rating: 4 },
    { title: 'Joker', description: 'Joker is a 2019 psychological thriller film directed by Todd Phillips from a screenplay he co-wrote with Scott Silver', posterURL: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg', rating: 3 },
    // Add more movies as needed
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setFilteredMovies(newMovies);
  };

  const filterMovies = (criteria) => {
    const filtered = movies.filter(movie => {
      return (criteria.title ? movie.title.toLowerCase().includes(criteria.title.toLowerCase()) : true) && 
             (criteria.rating ? movie.rating >= criteria.rating : true);
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
        <Filter onFilter={filterMovies} />
        <AddMovie addMovie={addMovie} />
        <MovieList movies={filteredMovies} />
      </header>
    </div>
  );
};

export default App;
