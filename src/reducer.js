import actionTypes from './actions/actionTypes'

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

  default:
   return state
 }
}
