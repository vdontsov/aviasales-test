import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './SortTabs.module.scss'

const SortTabs = ({ data, onChange, ...props }) => {
  const [active, setActive] = useState(props.active || 0)

  const onClickHandler = (i, tab) => () => setActive(i) || onChange(tab)

  const tabs = data.map((d, i) => {
    const classNames = i === active ? `${styles.tab} ${styles.active}` : styles.tab
    return (
      <div key={d.id} className={classNames} onClick={onClickHandler(i, d)}>
        {d.title}
      </div>
    )
  })

  return <div className={styles.sortTabs}>{tabs}</div>
}

SortTabs.defaultProps = {
  data: [],
  onChange: () => {},
}

SortTabs.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    title: PropTypes.string.isRequired,
  })),
  active: PropTypes.number,
}

export default SortTabs
