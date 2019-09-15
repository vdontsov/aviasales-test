import * as actionTypes from './actions/actionTypes'
import { applyTicketFilters } from './utils'

import FILTERS from './data/filters.json'
import SORT_TABS from './data/sortTabs.json'

const INITIAL_STATE = {
  rawTickets: [],
  tickets: [],
  sortTabs: SORT_TABS,
  filters: FILTERS,
  searchId: '',
  currentPage: 1,
}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {

  case actionTypes.CHANGE_FILTERS: {
    const filters = action.payload
    const tickets = applyTicketFilters(filters, state.rawTickets)
    return { ...state, filters, tickets, currentPage: 1 }
  }

  case actionTypes.GET_SEARCH_ID_SUCCESS:
    return { ...state, searchId: action.payload }

  case actionTypes.GET_TICKETS_SUCCESS: {
    const rawTickets = action.payload
    const tickets = applyTicketFilters(state.filters, rawTickets)
    return { ...state, rawTickets, tickets }
  }

  case actionTypes.NEXT_PAGE:
    return { ...state, currentPage: state.currentPage + 1 }

  default:
   return state
 }
}
