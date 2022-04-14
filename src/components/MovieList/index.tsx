import React from 'react'
import { List } from '@mui/material'
import MovieItem, { IMovieData } from '../MovieItem'


interface IMovieListProps {
  items: Array<IMovieData>,
  addRemoveButton?: boolean
}

const MovieList: React.FC<IMovieListProps> = ({
  items,
  addRemoveButton = false
}) => {
  return (
    <List>
      { items.map((item) => (
        <MovieItem
          key={item.imdbID}
          data={item}
          hasRemoveButton={addRemoveButton}
        />
      )) }
    </List>
  )
}

export default MovieList
