import React, { useMemo } from 'react'
import { Styles } from './TableStyles'
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useFlexLayout,
  useResizeColumns
} from 'react-table'
import { columns, data } from './ColumnsRows'
import { filterTypes, ColumnFilter } from './Filtering'

export const ReactTable = () => {
  // const tableCols = useMemo(() => columns, [])
  // const tableData = useMemo(() => data, [])
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
      minWidth: 30,
      width: 150,
      maxWidth: 400
    }),
    []
  )
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: {
        pageSize: 3,
        pageIndex: 1
      }
    },
    useFilters, // * useFilters hook to filter the table
    useGlobalFilter,
    useSortBy, // * useSortBy hook to sort the table, must be placed after the useFilter hook
    usePagination, // * usePagination hook to sort the table, must be placed after the useSortBy hook
    useFlexLayout,
    useResizeColumns
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow
    // * add this to enable footers
  } = tableInstance

  console.log({ defaultColumn })
  return (
    // apply the table props
    <Styles>
      <div {...getTableProps()} className='table'>
        {/* // * table HEAD BEGIN */}
        <div>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <div {...headerGroup.getHeaderGroupProps()} className='tr'>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, i) => {
                    const {
                      getHeaderProps,
                      getSortByToggleProps,
                      canFilter,
                      render,
                      isSorted,
                      isSortedDesc,
                      isResizing,
                      getResizerProps
                    } = column
                    // * getHeaderProps gets the headerInfo
                    // * getSortByToggleProps gets the toggle information
                    const { onClick, ...rest } = getHeaderProps(getSortByToggleProps())
                    console.log('click', onClick, 'rest', rest)
                    return (
                      // * Apply the header cell props
                      <div key={`th-${i}`} {...rest} className='th'>
                        <div onClick={onClick}>{render('Header')}</div>
                        {/* resizer div */}
                        <div
                          {...getResizerProps()}
                          className={`resizer ${isResizing ? 'isResizing' : ''}`}
                        />
                        {/* Render the columns filter UI */}
                        <div>{canFilter ? render('Filter') : null}</div>
                        <span>{isSorted ? (isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                      </div>
                    )
                  })
                }
              </div>
            ))
          }
        </div>
        {/* // * table HEAD END*/}
        {/* // * table BODY begin*/}
        <div {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <div {...row.getRowProps()} className='tr'>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <div {...cell.getCellProps()} className='td'>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        {/* // * table body end*/}
        {/* // * table footer begin*/}
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div className='pagination'>
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
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        {/* // * table footer end*/}
      </div>
    </Styles>
  )
}
