import React, {FormEvent, useState} from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs'
import Header from '../../components/Header';
import { Container, CardContainer, TableContainer } from './styles';

interface Movies {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [favorites, setFavorites] = useState<Movies[]>([]);
  const [curtiu, setCurtir] = useState(false);
  const [search, setSearch] = useState('');

 async function loadData (search: string):Promise<void> {
    console.log(search);
    const url = `http://www.omdbapi.com/?apikey=925eba28&s=${search}`;
    const response = await fetch(url);  
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      console.log(movies)
    }
  }
  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (search) {
      loadData(search);
    }
  }

  const addFavorites = () => {
    setCurtir(true);
  }

  return (
    <>
<Header />
      <Container>
        <CardContainer>
            <main>
              <div>
                <form onSubmit={handleSearch}>
                  <input 
                    type="text" 
                    value={search}
                    placeholder="Digite o nome do Filme"
                    onChange={event => setSearch(event.target.value)}>
                  </input> 
                  <button type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </main>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Filme</th>
              </tr>
            </thead>
            <tbody  onClick={() => addFavorites()} >
              {movies.map(filmes => (
                <tr className="=tableMovies" key={filmes.imdbID}>
                  <td className="title">{filmes.Title}</td>
                  <td className="year">{filmes.Year}</td>
                   <td> 
                  { curtiu ? 
                    <BsStarFill size={28} style={{color: 'yellow'}}/> 
                  :
                    <BsStar size={28}/>    
                  }
                  </td>
                </tr> 
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
