import React from 'react'
import { List } from '@mui/material'
import MovieItem, { IMovieData } from '../MovieItem'


interface IMovieListProps {
  items: Array<IMovieData>
}

const MovieList: React.FC<IMovieListProps> = ({
  items
}) => {
  return (
    <List>
      { items.map((item) => (
        <MovieItem
          key={item.imdbID}
          data={item}
        />
      )) }
    </List>
  )
}

export default MovieList
