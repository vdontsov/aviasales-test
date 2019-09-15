import { connect } from 'react-redux'
import { changeFilters, getSearchId, getTickets, nextPage } from '../../actions'
import App from './App'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  changeFilters,
  getSearchId,
  getTickets,
  nextPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
