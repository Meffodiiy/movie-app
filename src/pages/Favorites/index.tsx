import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { loadFavorites } from '../../redux/actions'
import MovieList from '../../components/MovieList'
import { Container } from '@mui/material'
import { getMovieDataByImdbID } from '../../utils/fetchMovieData'
import { IMovieData } from '../../components/MovieItem'


interface IFavoritesProps {
  favoriteMovieImdbIDs: string[]
}

interface IFavoritesActionProps {
  loadFavorites: () => void
}

const Favorites: React.FC<IFavoritesProps & IFavoritesActionProps> = ({
  favoriteMovieImdbIDs,
  loadFavorites
}) => {
  const [favoriteMoviesData, setFavoriteMoviesData] = useState<Array<IMovieData>>([])

  useEffect(() => {
    loadFavorites()
  }, [])
  
  useEffect(() => {
    if (favoriteMoviesData.length) {
      setFavoriteMoviesData(
        prevMoviesData => prevMoviesData.filter(
          ({ imdbID }) => favoriteMovieImdbIDs.includes(imdbID)))
    } else {
      favoriteMovieImdbIDs.forEach(imdbID => {
        getMovieDataByImdbID(imdbID, true).then(movieData => {
          setFavoriteMoviesData(prevMoviesData => [...prevMoviesData, movieData])
        })
      })
    }
  }, [favoriteMovieImdbIDs])

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
      <strong
        style={{
          color: 'white',
          fontSize: '2em',
          paddingTop: '15px'
        }}
      >
        Favorites
      </strong>
      <MovieList
        items={favoriteMoviesData}
        addRemoveButton
      />
    </Container>
  )
}

const mapStateToProps = (state: { favorites: IFavoritesProps }) => ({
  favoriteMovieImdbIDs: state.favorites.favoriteMovieImdbIDs
})

export default connect(
  mapStateToProps,
  { loadFavorites }
)(Favorites)

export type {
  IFavoritesProps
}
