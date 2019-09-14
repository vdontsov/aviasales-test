import { ApiService } from '../services'
import actionTypes from './actionTypes'

export const getSearchId = () => dispatch => {
  dispatch({ type: actionTypes.GET_SEARCH_ID })

  ApiService
    .get('/search')
    .then(({ data }) => dispatch({
      type: actionTypes.GET_SEARCH_ID_SUCCESS,
      payload: data.searchId,
    }))
    .catch(() => dispatch({ type: actionTypes.GET_SEARCH_ID_FAILED }))
}
