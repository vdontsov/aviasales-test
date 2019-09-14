import filters from './data/filters.json'
import sortTabs from './data/sortTabs.json'

const INITIAL_STATE = {
  tickets: [],
  sortTabs,
  filters,
}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  default:
   return state
 }
}
