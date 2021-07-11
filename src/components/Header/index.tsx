import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <nav>
        <Link to="/">Pesquisar</Link>
        <Link to="/">Favoritos</Link>
      </nav>
    </header>
  </Container>
);
export default Header;



