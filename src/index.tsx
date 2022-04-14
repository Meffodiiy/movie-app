import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import { ThemeProvider, createTheme } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
         margin: 0;
         padding: 0;
        }
      `
    }
  }
})

const store = createStore(rootReducer)

const rootContainer = document.getElementById('root') as HTMLElement
const root = createRoot(rootContainer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/details/:imdbID" element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
