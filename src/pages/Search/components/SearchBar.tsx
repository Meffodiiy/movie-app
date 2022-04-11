import React from 'react'
import { Button, InputBase, Paper } from '@mui/material'


const SearchBar = () => {

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
      />
      <Button>Search</Button>
    </Paper>
  )
}

export default SearchBar
