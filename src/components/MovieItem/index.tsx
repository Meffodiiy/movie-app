import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ListItem,
  Paper, Box
} from '@mui/material'

interface IMovieData {
  Title: string
  Year: string
  imdbID: string
  Type: 'movie' | 'series' | 'episode'
  Poster: string
  Plot?: string
  Ratings?: Array<{ Source: string, Value: string }>
  [key: string]: string | Array<object> | undefined
}

interface IMovieItemProps {
  data: IMovieData
}

const MovieItem: React.FC<IMovieItemProps> = ({
  data: {
    Title,
    Year,
    imdbID,
    Poster
  }
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
        <Box padding="3px 16px 6px">
          <strong>{ Title }</strong>
          <p>{ Year }</p>
        </Box>
      </Paper>
    </ListItem>
  )
}

export default MovieItem

export type {
  IMovieData
}
