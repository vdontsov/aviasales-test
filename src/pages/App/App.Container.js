import { connect } from 'react-redux'
import { changeFilters, } from '../../actions'
import App from './App'

const mapStateToProps = ({ filters, sortTabs }) => ({
  filters,
  sortTabs,
})

const mapDispatchToProps = {
  changeFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
