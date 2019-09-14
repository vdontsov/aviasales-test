import { connect } from 'react-redux'
import { changeFilters, getSearchId, getTickets } from '../../actions'
import App from './App'

const mapStateToProps = ({ filters, sortTabs, searchId, loadingTickets, tickets }) => ({
  filters,
  sortTabs,
  searchId,
  loadingTickets,
  tickets,
})

const mapDispatchToProps = {
  changeFilters,
  getSearchId,
  getTickets,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
