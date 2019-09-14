import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FiltersPropTypes, SortTabsPropTypes, TicketPropTypes } from '../../utils'
import { Filters, SortTabs } from '../../components'
import styles from './App.module.scss'

const App = ({ filters, changeFilters, sortTabs, getSearchId, searchId, getTickets }) => {
  useEffect(getSearchId, [])

  useEffect(() => {
    if (searchId) getTickets(searchId)
  }, [searchId, getTickets])

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
  loadingTickets: PropTypes.bool,
  tickets: PropTypes.arrayOf(TicketPropTypes),
  searchId: PropTypes.string,
  filters: FiltersPropTypes,
  sortTabs: SortTabsPropTypes,
  changeFilters: PropTypes.func,
  getSearchId: PropTypes.func,
  getTickets: PropTypes.func,
}

export default App
