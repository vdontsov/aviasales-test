import * as actionTypes from './actions/actionTypes'
import { filter, sort } from './utils'

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

const memoizeFilterAndSort = () => {
  let cache = {}

  return (filters={}, sortTabs={}, tickets=[]) => {
    const filtersKeys = filters.map(f => `${f.id}_${f.checked}`)
    const sortTabsKeys = sortTabs.map(f => `${f.id}_${f.active}`)
    const key = filtersKeys.concat(sortTabsKeys).join('_')

    if (cache[key]) return cache[key]

    const result = sort(sortTabs, filter(filters, tickets))
    cache[key] = result

    return result
  }
}

const filterAndSort = memoizeFilterAndSort()

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {

  case actionTypes.CHANGE_FILTERS: {
    const filters = action.payload
    const tickets = filterAndSort(filters, state.sortTabs, state.rawTickets)
    return { ...state, filters, tickets }
  }

  case actionTypes.GET_SEARCH_ID_SUCCESS:
    return { ...state, searchId: action.payload }

  case actionTypes.GET_TICKETS_SUCCESS: {
    const rawTickets = action.payload
    const tickets = filterAndSort(state.filters, state.sortTabs, rawTickets)
    return { ...state, rawTickets, tickets }
  }

  case actionTypes.NEXT_PAGE:
    return { ...state, currentPage: state.currentPage + 1 }

  case actionTypes.CHANGE_SORT_TAB: {
    const sortTabs = state.sortTabs.map((t, i) => i === action.payload ? {
      ...t,
      active: !t.active
    } : {
      ...t,
      active: false
    })
    const tickets = filterAndSort(state.filters, sortTabs, state.rawTickets)
    return { ...state, sortTabs, tickets }
  }

  default:
   return state
 }
}
