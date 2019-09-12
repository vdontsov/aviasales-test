import React from 'react'
import PropTypes from 'prop-types'

import styles from './SegmentColumn.module.scss'

const SegmentColumn = ({ head, text }) => (
  <div>
    <div className={styles.segmentTitle}>{head}</div>
    <div className={styles.segmentText}>{text}</div>
  </div>
)

SegmentColumn.propTypes = {
  head: PropTypes.string,
  text: PropTypes.string,
}

export default SegmentColumn
