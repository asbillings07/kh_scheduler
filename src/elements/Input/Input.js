import PropTypes from 'prop-types'
import React from 'react'
import { InputLabel, TextInput } from './components'

export function Input({
  placeholder = '',
  initialValue = '',
  defaultValue = null,
  rows = '',
  cols = '',
  label = null,
  type = 'text',
  domID = null,
  disabled = false,
  name = null,
  onChange = () => false
}) {
  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component')
  }

  return (
    <div>
      {label ? <InputLabel htmlFor={domID}>{label}</InputLabel> : null}

      <TextInput
        id={domID}
        defaultValue={defaultValue}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

Input.propTypes = {
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  domID: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  type: PropTypes.string
}
