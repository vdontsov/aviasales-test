import { ApiService } from '../services'
import { pollTickets } from '../utils'
import * as actionTypes from './actionTypes'

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

export const getTickets = (searchId='') => dispatch => {
  dispatch({ type: actionTypes.GET_TICKETS })

  pollTickets(() => ApiService.get(`tickets?searchId=${searchId}`)).then(data => {
    dispatch({ type: actionTypes.GET_TICKETS_SUCCESS, payload: data })
  })
}
