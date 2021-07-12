import { useState, FormEvent } from 'react';
import '../../styles/movielist.scss';
import { FiHeart, FiSearch } from 'react-icons/fi'

interface Movies {
  Title: string;  
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
  isComplete: false;
}
export function MovieList() {
  
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<Movies[]>([]);
  const [favorites, setFavorites] = useState<Movies[]>([]);
  
  function handleAddFovorites(imdbID: string) {
   //temos um bug, nao esta atualizando o array. Esta salvando um favorito por vez :/
   let array = favorites; 
    const addingFavorites = movies.filter((movie, key:number ) => {
      if ( movie.imdbID === imdbID ) {
        array.splice(key, 1);
        array.push(movie);
        localStorage.setItem('@favorites', JSON.stringify(array));
      }
    });
    console.log(array)
    setFavorites([...addingFavorites]);
    const newList = movies.filter(movie => movie.imdbID !== imdbID);
    setMovies(newList);
  }
  async function loadData (search: string):Promise<void> {
    const url = `http://www.omdbapi.com/?apikey=925eba28&s=${search}`;
    const response = await fetch(url);  
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }
  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (search) {
      loadData(search);
    }
  }
  return (
    <section className="task-list container">
      <header>
        <h2>Filmes</h2>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Pesquisar Filmes"
            onChange={event => setSearch(event.target.value)}
            value={search}
          />
          <button type="submit" data-testid="add-task-button" >
            <FiSearch size={16} color="#2F4F4F" />
          </button>
        </div>
      </form>
      </header>

      <main>
        <ul>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <div className={movie.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <span className="checkmark"></span>
                </label>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
              <button type="button" data-testid="remove-task-button" onClick={() => handleAddFovorites(movie.imdbID)}>
                <FiHeart size={24} />
              </button>
            </li>
          ))}

        </ul>
      </main>
    </section>
  )
}