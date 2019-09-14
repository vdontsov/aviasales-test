import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { FiltersPropTypes, SortTabsPropTypes, TicketPropTypes } from '../../utils'
import { Filters, SortTabs, Ticket } from '../../components'
import styles from './App.module.scss'

const App = ({
  filters,
  changeFilters,
  sortTabs,
  getSearchId,
  searchId,
  getTickets,
  currentPage,
  tickets,
  loadingTickets,
}) => {
  useEffect(getSearchId, [])

  useEffect(() => {
    if (searchId) getTickets(searchId)
  }, [searchId, getTickets])

  const numberPerPage = 10
  const begin = ((currentPage - 1) * numberPerPage)
  const end = begin + numberPerPage
  const ticketsToShow = tickets.slice(begin, end).map(t => <Ticket key={shortid.generate()} data={t} />)

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
          <div>
            {ticketsToShow}
          </div>
        </div>
      </main>
    </div>
  )
}

App.propTypes = {
  currentPage: PropTypes.number,
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
