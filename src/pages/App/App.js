import React from 'react'
import { FiltersPropTypes, SortTabsPropTypes } from '../../utils'
import { Filters, SortTabs } from '../../components'
import styles from './App.module.scss'

const App = props => (
  <div className={styles.app}>
    <header className={styles.appHeader}></header>
    <main className={styles.appMain}>
      <div className={styles.appFilters}>
        <Filters
          title="Количество пересадок"
          data={props.filters}
          onChange={props.changeFilters}
        />
      </div>
      <div className={styles.appResults}>
        <SortTabs data={props.sortTabs} />
      </div>
    </main>
  </div>
)

App.propTypes = {
  filters: FiltersPropTypes,
  sortTabs: SortTabsPropTypes,
}

export default App
