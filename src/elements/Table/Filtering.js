import React, { useMemo } from 'react'

const isValidDate = function (date) {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  // eslint-disable-next-line
  return date.getTime() === date.getTime()
}
// functions to run when a column is filtered depending on the type
export const filterTypes = {
  //
  year: (rows, id, filterValue) => {
    return rows.filter((row) => {
      const rowValue = row.values[id]
      return rowValue !== undefined &&
        Number(filterValue) &&
        new Date(rowValue) &&
        isValidDate(new Date(rowValue))
        ? new Date(rowValue).getFullYear() === Number(filterValue)
        : true
    })
  },
  text: (rows, id, filterValue) => {
    return rows.filter((row) => {
      const rowValue = row.values[id]
      return rowValue !== undefined
        ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
        : true
    })
  }
}

export const ColumnFilter = ({ column: { filterValue, setFilter, filter } }) => {
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value || undefined)} // * Set undefined to remove the filter entirely
      placeholder={`Search ${filter ? filter : ''}...`}
    />
  )
}
