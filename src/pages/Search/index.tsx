import React, { useState, useCallback } from 'react'
import { Container, Link } from '@mui/material'
import SearchBar from './components/SearchBar'
import MovieList from '../../components/MovieList'
import { IMovieData } from '../../components/MovieItem'
import { searchMoviesByTitle } from '../../utils/fetchMovieData'


const Search: React.FC = () => {
  const [foundMoviesData, setFoundMoviesData] = useState<Array<IMovieData>>([])
  
  const onSearch = useCallback(title => {
    searchMoviesByTitle(title).then(
      moviesData => setFoundMoviesData(moviesData)
    )
  }, [])
  
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
      <SearchBar {...{ onSearch }}/>
      <MovieList items={foundMoviesData}/>
    </Container>
  )
}

export default Search
