import { connect } from 'react-redux'
import { changeFilters, getSearchId, } from '../../actions'
import App from './App'

const mapStateToProps = ({ filters, sortTabs, searchId }) => ({
  filters,
  sortTabs,
  searchId,
})

const mapDispatchToProps = {
  changeFilters,
  getSearchId,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
