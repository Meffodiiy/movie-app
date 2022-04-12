import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ListItem,
  Paper, Grid
} from '@mui/material'
import { Star as StarIcon } from '@mui/icons-material'

interface IMovieData {
  Title: string,
  Year: number,
  imdbID: string,
  Type: 'movie' | 'series' | 'episode',
  Poster: string
}

interface IMovieItemProps {
  data: IMovieData,
  hasStar?: boolean
}

const MovieItem: React.FC<IMovieItemProps> = ({
  data: {
    Title,
    Year,
    imdbID,
    Poster
  },
  hasStar= false
}) => {
  const navigate = useNavigate()

  const openMovieDetails = () => navigate(`/details/${ imdbID }`)
  
  return (
    <ListItem
      button
      disableGutters
      onClick={ openMovieDetails }
    >
      <Paper
        sx={{ overflow: 'hidden' }}
      >
        <img src={Poster} alt="poster"/>
        <Grid
          container
          sx={{ padding: '6px 16px 6px 16px' }}
          rowSpacing={1}
        >
          <Grid
            item
            xs={11 + (+!hasStar)}
          >
            <strong>{ Title }</strong>
          </Grid>
          { hasStar && (
            <Grid item xs={1}>
              <StarIcon/>
            </Grid>
          ) }
          <Grid item xs={12}>{ Year }</Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

export default MovieItem

export type {
  IMovieData
}
