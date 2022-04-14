import React, {useState} from 'react'
import { Button, InputBase, Paper } from '@mui/material'


interface ISearchBarProps {
  onSearch: (title: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({
  onSearch
}) => {
  const [movieTitle, setMovieTitle] = useState('')

  return (
    <Paper
      sx={{
        display: 'flex',
        width: '60%',
        minWidth: '400px',
        padding: '6px 20px 4px',
        margin: '10px 0'
      }}
    >
      <InputBase
        placeholder="Enter movie..."
        sx={{
          flex: 1
        }}
        onChange={ event => setMovieTitle(event.target.value) }
        value={ movieTitle }
      />
      <Button
        onClick={ () => onSearch(movieTitle) }
      >
        Search
      </Button>
    </Paper>
  )
}

export default SearchBar
