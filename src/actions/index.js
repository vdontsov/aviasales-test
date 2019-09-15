import { NEXT_PAGE, CHANGE_SORT_TAB } from './actionTypes'

export * from './filtersActions'
export * from './searchActions'

export const nextPage = () => ({
  type: NEXT_PAGE
})

export const changeSortTab = (tabIndex=0) => ({
  type: CHANGE_SORT_TAB,
  payload: tabIndex,
})
