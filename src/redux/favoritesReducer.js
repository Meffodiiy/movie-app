import {LOAD_FAVORITES, TOGGLE_FAVORITES} from './types'

const LOCAL_STORAGE_KEY = 'favoriteMovieImdbIDs'

const getImdbIDsFromLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')

const toggleImdbIDInLocalStorage = imdbID => {
  let imdbIDs = getImdbIDsFromLocalStorage()
  imdbIDs = imdbIDs.includes(imdbID)
    ? imdbIDs.filter(storedImdbID => storedImdbID !== imdbID)
    : [...imdbIDs, imdbID]
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(imdbIDs))
  return imdbIDs
}

const initialState = {
  favoriteMovieImdbIDs: []
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_FAVORITES:
    return {
      ...state,
      favoriteMovieImdbIDs: getImdbIDsFromLocalStorage()
    }
  case TOGGLE_FAVORITES:
    return {
      ...state,
      favoriteMovieImdbIDs: toggleImdbIDInLocalStorage(action.payload)
    }
  default:
    return state
  }
}
