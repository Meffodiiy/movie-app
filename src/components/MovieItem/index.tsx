import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ListItem, Paper, Box, Button } from '@mui/material'
import { connect } from 'react-redux'
import { toggleFavorites } from '../../redux/actions'

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
  data: IMovieData,
  hasRemoveButton: boolean,
  toggleFavorites: (imdbID: string) => void
}

const MovieItem: React.FC<IMovieItemProps> = ({
  data: {
    Title,
    Year,
    imdbID,
    Poster
  },
  hasRemoveButton, 
  toggleFavorites
}) => {
  const navigate = useNavigate()

  const openMovieDetails = () => navigate(`/details/${ imdbID }`)
  
  return (
    <ListItem
      disableGutters
      onClick={ !hasRemoveButton ? openMovieDetails : undefined }
    >
      <Paper
        sx={{ overflow: 'hidden' }}
      >
        <img src={Poster} alt="poster"/>
        <Box padding="3px 16px 6px">
          <strong>{ Title }</strong>
          <p>{ Year }</p>
        </Box>
        { hasRemoveButton && (
          <Box
            display="flex"
            justifyContent="center"
            marginBottom="6px"
          >
            <Button
              color="error"
              onClick={ () => toggleFavorites(imdbID) }
            >
              Remove
            </Button>
          </Box>
        ) }
      </Paper>
    </ListItem>
  )
}

export default connect(null, { toggleFavorites })(MovieItem)

export type {
  IMovieData
}
