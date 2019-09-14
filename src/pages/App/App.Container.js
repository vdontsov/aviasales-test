import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = ({ filters, sortTabs }) => ({
  filters,
  sortTabs,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
