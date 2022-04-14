import React from 'react'
import { Container, Link } from '@mui/material'
import SearchBar from './components/SearchBar'
import MovieList from '../../components/MovieList'
import { IMovieData } from '../../components/MovieItem'


const Search: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Link
        href="/favorites"
        color="#fff"
        fontSize="2em"
        fontWeight="bold"
        paddingTop="6px"
      >
        Favorites
      </Link>
      <SearchBar/>
      <MovieList items={itemsData}/>
    </Container>
  )
}

export default Search

/* TEMP */
const itemsData: Array<IMovieData> = [
  {
    Title: 'Batman',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    Title: 'Batman 2',
    Year: '2006',
    imdbID: 'tt0372785',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
]
