import { connect } from 'react-redux'
import { changeFilters, getSearchId, getTickets, nextPage, changeSortTab } from '../../actions'
import App from './App'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  changeFilters,
  getSearchId,
  getTickets,
  nextPage,
  changeSortTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
