import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box, Card, CardMedia, Container, Grid } from '@mui/material'
import { Star as StarIcon } from '@mui/icons-material'
import { getMovieDataByImdbID } from '../../utils/fetchMovieData'
import { IMovieData } from '../../components/MovieItem'
import { connect } from 'react-redux'
import { loadFavorites, toggleFavorites } from '../../redux/actions'
import { IFavoritesProps } from '../Favorites'


interface IDetails {
  loadFavorites: () => void,
  toggleFavorites: (imdbID: string) => void,
  favoriteMovieImdbIDs: string[]
}

const Details: React.FC<IDetails> = ({
  loadFavorites,
  toggleFavorites,
  favoriteMovieImdbIDs
}) => {
  const { imdbID } = useParams()

  const [{
    Poster,
    Title: title,
    Plot: plot,
    Ratings,
    ...restMovieData
  }, setMovieData] = useState({} as IMovieData)
  
  useEffect(() => {
    if (!imdbID) return
    getMovieDataByImdbID(imdbID).then(data => setMovieData(data))
    loadFavorites()
  }, [imdbID])

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: '26px 0'
      }}
    >
      <Grid container direction="row" columnSpacing={6} wrap="wrap">
        <Grid item xs={false}>
          <Card sx={{ width: '300px' }}>
            <CardMedia
              component="img"
              alt="poster"
              image={Poster}
            />
          </Card>
        </Grid>
        <Grid item xs>
          <Box
            sx={{
              fontSize: '2em',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box>{ title }</Box>
            { imdbID && (
              <StarIcon
                onClick={ () => toggleFavorites(imdbID) }
                sx={{
                  cursor: 'pointer'
                }}
                color={ favoriteMovieImdbIDs.includes(imdbID) ? 'warning' : undefined }
              />
            ) }
          </Box>
          <Box sx={{ color: 'white' }} padding="16px 0">
            <i>{ plot }</i>
          </Box>
          <Grid container direction="row">
            <Grid item xs={6}>
              { Object.entries(restMovieData).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{ color: 'white' }}
                >
                  <strong>{ key }</strong>: { value }
                </Box>
              )) }
            </Grid>
            <Grid item xs={6}>
              <strong style={{ color: 'white' }}>Ratings</strong>
              { Ratings?.map(({ Source, Value }) => (
                <Box
                  key={Source}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  <strong>{ Source }</strong>
                  { Value }
                </Box>
              )) }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state: { favorites: IFavoritesProps }) => ({
  favoriteMovieImdbIDs: state.favorites.favoriteMovieImdbIDs
})

export default connect(
  mapStateToProps,
  { loadFavorites, toggleFavorites  }
)(Details)
