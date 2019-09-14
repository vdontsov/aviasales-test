import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

const Checkbox = ({ title, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    if (isChecked !== checked) {
      onChange(isChecked)
    }
  }, [isChecked, checked, onChange])

  const onInputChangeHandler = e => setIsChecked(e.target.checked)
  const onClickWrapperHandler = () => setIsChecked(!isChecked)

  return (
    <div className={styles.wrapper} onClick={onClickWrapperHandler}>
      <div className={styles.checkbox}>
        <input
          className={styles.input}
          checked={isChecked}
          onChange={onInputChangeHandler}
          type="checkbox" />
        <span className={styles.styler} aria-hidden="true"></span>
        {title}
      </div>
    </div>
  )
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => null,
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox
