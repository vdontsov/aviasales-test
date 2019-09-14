import React from 'react'
import PropTypes from 'prop-types'
import { FiltersPropTypes } from '../../utils'

import Card from '../Card'
import Checkbox from '../Checkbox'
import styles from './Filters.module.scss'

const Filters = ({ title, data, onChange }) => {
  const onChangeHandler = id => checked => onChange(checked, id)
  const checkboxes = data.map(i => <Checkbox
                                      key={i.id}
                                      {...i}
                                      onChange={onChangeHandler(i.id)} />)

  return (
    <Card>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.filtersWrapper}>
        {checkboxes}
      </div>
    </Card>
  )
}

Filters.defaultProps = {
  title: '',
  data: [],
  onChange: () => null,
}

Filters.propTypes = {
  title: PropTypes.string.isRequired,
  data: FiltersPropTypes,
  onChange: PropTypes.func,
}

export default Filters
