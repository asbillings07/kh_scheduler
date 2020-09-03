import PropTypes from 'prop-types'
import React from 'react'
import { InputLabel, TextInput } from './components'

export function Input({
  placeholder = '',
  initialValue = '',
  rows = '',
  cols = '',
  label = null,
  type = 'text',
  domID = null,
  disabled = false,
  name = null
}) {
  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component')
  }

  return (
    <div>
      {label ? <InputLabel htmlFor={domID}>{label}</InputLabel> : null}

      <TextInput id={domID} name={name} type={type} placeholder={placeholder} disabled={disabled} />
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
