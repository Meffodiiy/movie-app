import { LOAD_FAVORITES, TOGGLE_FAVORITES } from './types'

export const loadFavorites = () => ({
  type: LOAD_FAVORITES
})

export const toggleFavorites = imdbID => ({
  type: TOGGLE_FAVORITES,
  payload: imdbID
})
