import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

const Checkbox = ({ title, checked, onChange }) => {
  const inputRef = useRef()

  const onInputChangeHandler = e => onChange(e.target.checked)
  const onClickWrapperHandler = () => onChange(!inputRef.current.checked)

  return (
    <div className={styles.wrapper} onClick={onClickWrapperHandler}>
      <div className={styles.checkbox}>
        <input
          ref={inputRef}
          className={styles.input}
          checked={checked}
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
