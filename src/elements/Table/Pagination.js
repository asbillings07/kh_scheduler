import PropTypes from 'prop-types'
import React from 'react'

export const Pagination = ({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  previousPage,
  nextPage,
  pageOptions,
  pageIndex,
  pageSize,
  setPageSize
}) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type='number'
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

Pagination.propTypes = {
  canNextPage: PropTypes.any,
  canPreviousPage: PropTypes.any,
  gotoPage: PropTypes.func,
  nextPage: PropTypes.func,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.shape({
    length: PropTypes.any
  }),
  pageSize: PropTypes.any,
  previousPage: PropTypes.func,
  setPageSize: PropTypes.func
}
