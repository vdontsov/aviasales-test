import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FiltersPropTypes, SortTabsPropTypes } from '../../utils'
import { Filters, SortTabs } from '../../components'
import styles from './App.module.scss'

const App = ({ filters, changeFilters, sortTabs, getSearchId, searchId }) => {
  useEffect(getSearchId, [])

  useEffect(() => {
    // get data
  }, [searchId])

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <main className={styles.appMain}>
        <div className={styles.appFilters}>
          <Filters
            title="Количество пересадок"
            data={filters}
            onChange={changeFilters}
          />
        </div>
        <div className={styles.appResults}>
          <SortTabs data={sortTabs} />
        </div>
      </main>
    </div>
  )
}

App.propTypes = {
  searchId: PropTypes.string,
  filters: FiltersPropTypes,
  sortTabs: SortTabsPropTypes,
  changeFilters: PropTypes.func,
  getSearchId: PropTypes.func,
}

export default App
