import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Card.module.scss'

const Card = ({ children, classes }) => (
  <div className={cx(styles.card, classes)}>
    {children}
  </div>
)

Card.defaultProps = {
  classes: []
}

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.arrayOf(PropTypes.string)
}

export default Card
