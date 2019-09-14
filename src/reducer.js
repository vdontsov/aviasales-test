import * as actionTypes from './actions/actionTypes'

import FILTERS from './data/filters.json'
import SORT_TABS from './data/sortTabs.json'

const INITIAL_STATE = {
  tickets: [],
  sortTabs: SORT_TABS,
  filters: FILTERS,
  searchId: '',
}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {

  case actionTypes.CHANGE_FILTERS:
    return { ...state, filters: action.payload }

  case actionTypes.GET_SEARCH_ID_SUCCESS:
    return { ...state, searchId: action.payload }

  case actionTypes.GET_TICKETS:
    return { ...state, loadingTickets: true }

  case actionTypes.GET_TICKETS_SUCCESS: {
    return { ...state, tickets: action.payload, loadingTickets: false }
  }

  default:
   return state
 }
}
