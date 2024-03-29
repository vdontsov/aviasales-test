import { isAllFilter, getAllFilterObj, checkedEveryFilterExceptAll } from '../utils'
import * as actionTypes from './actionTypes'

export const changeFilters = (filterValue, filterId) => (dispatch, getState) => {
  const filters = getState().filters

  let changedFilters = []

  // если выбран фильтр "ВСЕ", то выбираем все элементы
  if (isAllFilter(filterId) && filterValue) {
    changedFilters = filters.map(f => ({ ...f, checked: true }))
  } else {
    const allFilter = getAllFilterObj(filters)
    // если какой то элемент из фильторв переключается в false и при этом фильтр ВСЕ = true,
    if (!isAllFilter(filterId) && allFilter.checked && !filterValue) {
      changedFilters = filters.map(f => {
        // переключаем фильтр ВСЕ в false
        if (isAllFilter(f.id)) {
          return { ...f, checked: false }
        } else {
          // и переключаем выбраный фильтр
          return f.id === filterId ? { ...f, checked: filterValue } : f
        }
      })
    } else {
      changedFilters = filters.map(f => f.id === filterId ? { ...f, checked: filterValue } : f)
    }

    // если выбраны все фильтры кроме фильтра ВСЕ, то переключить его в true
    if (!isAllFilter(filterId) && checkedEveryFilterExceptAll(changedFilters)) {
      changedFilters = changedFilters.map(f => isAllFilter(f.id) ? { ...f, checked: true } : f)
    }
  }

  dispatch({ type: actionTypes.CHANGE_FILTERS, payload: changedFilters })
}
