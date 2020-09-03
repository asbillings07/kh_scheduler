import PropTypes from 'prop-types'
import React from 'react'
import { StyledTextArea } from './components/StyledTextArea'
import { TextAreaLabel } from './components/TextAreaLabel'

export function TextArea({
  label = null,
  name = null,
  initialValue = '',
  domID = null,
  cols = null,
  rows = null,
  disabled = false,
  placeholder = null,
  readOnly = false,
  autoFocus = false
}) {
  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component')
  }

  return (
    <div>
      {label ? <TextAreaLabel htmlFor={domID}>{label}</TextAreaLabel> : null}

      <StyledTextArea
        id={domID}
        name={name}
        rows={rows}
        readOnly={readOnly}
        autoFocus={autoFocus}
        cols={cols}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

TextArea.propTypes = {
  autoFocus: PropTypes.bool,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  domID: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number
}
