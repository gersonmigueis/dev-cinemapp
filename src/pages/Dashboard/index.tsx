import React from 'react';
import { MovieList } from '../../components/MovieList'
import Header from '../../components/Header';
import '../../styles/dashboard.scss';
const Dashboard: React.FC = () => {
  return (
    <>
    <Header />
      <MovieList></MovieList>
    </>
  );
};
export default Dashboard;
