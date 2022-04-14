import {IMovieData} from '../components/MovieItem'

interface IFetchData {
  Response: string,
  [key: string]: unknown
} 

const fetchData = async ({ s, i }: { s?: string, i?: string }): Promise<IFetchData> => {
  let apiURL = 'http://omdbapi.com/?apikey=6f627dd1'
  if (s) apiURL += `&s=${s}`
  if (i) apiURL += `&i=${i}`
  const response = await fetch(apiURL)
  return await response.json()
}

const searchMoviesByTitle = async (title: string): Promise<Array<IMovieData>> => {
  const { Response, Search } = await fetchData({ s: title })
  if (Response === 'True') {
    return Search as Array<IMovieData>
  }
  return []
}

const getMovieDataByImdbID = async (imdbID: string, includeImdbID = false): Promise<IMovieData> => {
  const { Response, ...rest } = await fetchData({ i: imdbID })
  if (Response === 'True') {
    if (!includeImdbID)
      delete rest.imdbID
    return rest as IMovieData
  }
  return {} as IMovieData
}

export {
  searchMoviesByTitle,
  getMovieDataByImdbID
}
