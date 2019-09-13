import React from 'react'
import { Filters, SortTabs } from './components'
import styles from './App.module.scss'

const tabs = [{
  id: 1,
  title: 'Самый дешевый'
}, {
  id: 2,
  title: 'Самый быстрый'
}]

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}></header>
    <main className={styles.appMain}>
      <div className={styles.appFilters}>
        <Filters />
      </div>
      <div className={styles.appResults}>
        <SortTabs data={tabs} />
      </div>
    </main>
  </div>
)

export default App
