import React from 'react';
import Header from '../../components/Header';
import { Container, CardContainer, TableContainer } from './styles';

const Favorites: React.FC = () => {
  return (
    <>
<Header />
      <Container>
        <CardContainer>
            <main>
              <div>
                
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
            <tbody>
  
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Favorites;