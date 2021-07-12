import React, { useState, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi'
import Header from '../../components/Header';
import '../../styles/favorites.scss';
interface Movies {
  Title: string;  
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
  isComplete: false;
}
export function Favorites () {
  const recover = (localStorage.getItem('@favorites'));
  const [favorites, setFavorites] = useState<Movies[]>([] || undefined);
  useEffect(() => {
    if (recover) {
      setFavorites(JSON.parse(recover)); 
    }
    console.log('Meus Favoritos'+recover)
  },[])

  function handleRemoveFovorites(imdbID: string) {
    const oldList = favorites.filter(movie => movie.imdbID !== imdbID);
    localStorage.removeItem('@favorites');
    setFavorites(oldList);
    console.log('Removendo....'+JSON.stringify(oldList));
  }
  return (
    <>
      <Header />
      <section className="task-list container">
      <header>
        <h2>Seus filmes favoritos!</h2>
      </header>
      <main>
        <ul>
          {favorites.map(movie => (
            <li key={movie.imdbID}>
              <div className={movie.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <span className="checkmark"></span>
                </label>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveFovorites(movie.imdbID)}>
                <FiTrash size={24} />
              </button>
            </li>
          ))}

        </ul>
      </main>
      </section>
    </>
  );
};