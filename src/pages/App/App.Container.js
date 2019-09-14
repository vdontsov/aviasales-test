import { connect } from 'react-redux'
import { changeFilters, getSearchId, getTickets } from '../../actions'
import App from './App'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  changeFilters,
  getSearchId,
  getTickets,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
