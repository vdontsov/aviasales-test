import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SortTabsPropTypes } from '../../utils'

import styles from './SortTabs.module.scss'

const SortTabs = ({ data, onChange }) => {
  const onClickHandler = tabIndex => () => onChange(tabIndex)
  
  const tabs = data.map((d, index) => {
    const classNames = d.active ? `${styles.tab} ${styles.active}` : styles.tab
    return (
      <div key={d.id} className={classNames} onClick={onClickHandler(index)}>
        {d.title}
      </div>
    )
  })

  return <div className={styles.sortTabs}>{tabs}</div>
}

SortTabs.defaultProps = {
  data: [],
  onChange: () => null,
}

SortTabs.propTypes = {
  onChange: PropTypes.func,
  data: SortTabsPropTypes,
}

export default SortTabs
