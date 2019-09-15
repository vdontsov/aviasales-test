import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { SortTabsPropTypes } from '../../utils'

import styles from './SortTabs.module.scss'

const SortTabs = ({ data, onChange, classes }) => {
  const onClickHandler = tabIndex => () => onChange(tabIndex)

  const tabs = data.map((d, index) => {
    const classNames = d.active ? `${styles.tab} ${styles.active}` : styles.tab
    return (
      <div key={d.id} className={classNames} onClick={onClickHandler(index)}>
        {d.title}
      </div>
    )
  })

  return <div className={cx(styles.sortTabs, classes)}>{tabs}</div>
}

SortTabs.defaultProps = {
  classes: [],
  data: [],
  onChange: () => null,
}

SortTabs.propTypes = {
  onChange: PropTypes.func,
  data: SortTabsPropTypes,
  classes: PropTypes.arrayOf(PropTypes.string),
}

export default SortTabs
