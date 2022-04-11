import React from 'react'
import { Container } from '@mui/material'
import SearchBar from './components/SearchBar'

const Search: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <SearchBar/>
    </Container>
  )
}

export default Search
