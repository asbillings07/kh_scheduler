import PropTypes from 'prop-types'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Styles, TableRow } from './TableStyles'
import { CheckBox } from './Checkbox'
import { Pagination } from './Pagination'
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  useRowSelect
} from 'react-table'

import { filterTypes, ColumnFilter } from './Filtering'

export function ReactTable({
  columns,
  records,
  addSelection = false,
  height = 400,
  sizeOfPage = 5,
  indexOfPage = 0,
  addPagination = false,
  selectionKey = null,
  initialFocusedItemId = null,
  onClickThrough = () => false,
  onRowSelect = () => false,
  isRowLink = false
}) {
  // const tableCols = useMemo(() => columns, [])
  // const tableData = useMemo(() => data, [])
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
      minWidth: 30,
      width: 200,
      maxWidth: 400
    }),
    []
  )
  const tableInstance = useTable(
    {
      columns,
      data: records,
      defaultColumn,
      filterTypes,
      initialState: {
        pageSize: sizeOfPage,
        pageIndex: indexOfPage
      }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useFlexLayout,
    useResizeColumns,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => {
            return (
              <div>
                <CheckBox
                  onClick={(e) => console.log(e.target)}
                  {...row.getToggleRowSelectedProps()}
                />
              </div>
            )
          }
        },
        ...columns
      ])
    }
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,

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
    state: { pageIndex, pageSize, selectedRowIds },
    prepareRow
    // * add this to enable footers
  } = tableInstance
  const rowItems = addPagination ? page : rows
  const [focusedItemId, setFocusedItemId] = useState(initialFocusedItemId)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (initialFocusedItemId !== null) setFocusedItemId(initialFocusedItemId)
  }, [initialFocusedItemId])
  // useEffect(() => {
  //   if (focusedItemId !== null) {
  //     console.log(rowRef.current)
  //     rowRef.current.focus()
  //   }
  // }, [focusedItemId])
  const refs = []

  const setRef = (ref) => {
    refs.push(ref)
  }

  const focusRows = (id) => {
    const ref = refs[id]
    console.log(ref)
    ref.focus()
  }

  return (
    // apply the table props
    <Styles>
      <div {...getTableProps()} className='table'>
        <div>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <div {...headerGroup.getHeaderGroupProps()}>
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

                    return (
                      // * Apply the header cell props
                      <div key={`th-${i}`} {...rest} className='th'>
                        <div onClick={onClick}>{render('Header')}</div>

                        <div
                          {...getResizerProps()}
                          className={`resizer ${isResizing ? 'isResizing' : ''}`}
                        />

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

        <div {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rowItems.map((row, i) => {
              // Prepare the row for display
              //console.log('ROW', row)
              prepareRow(row)
              const onRowClick = (e) => {
                const { original, index } = row
                const rowData = original
                setFocusedItemId(rowData[selectionKey])
                console.log({ e, index, rowData })
                console.log(refs)
                focusRows(index)
                onClickThrough(e, index, rowData)
              }
              const { index, original } = row
              const record = { index, ...original }
              //console.log(focusedItemId)
              //console.log(record[index])
              const isFocused = record && focusedItemId === record[selectionKey] ? 'true' : null
              return (
                // Apply the row props
                <TableRow
                  tabIndex={index}
                  ref={(el) => setRef(el)}
                  onClick={isRowLink ? onRowClick : () => false}
                  {...row.getRowProps()}
                >
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
                </TableRow>
              )
            })
          }
        </div>

        {addPagination ? (
          <Pagination
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            pageSize={pageSize}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            previousPage={previousPage}
            nextPage={nextPage}
            setPageSize={setPageSize}
            gotoPage={gotoPage}
          />
        ) : (
          ''
        )}
      </div>
    </Styles>
  )
}

ReactTable.propTypes = {
  addPagination: PropTypes.bool,
  addSelection: PropTypes.bool,
  columns: PropTypes.array,
  height: PropTypes.number,
  indexOfPage: PropTypes.number,
  initialFocusedItemId: PropTypes.string,
  isRowLink: PropTypes.bool,
  onClickThrough: PropTypes.func,
  onRowSelect: PropTypes.func,
  records: PropTypes.array,
  selectionKey: PropTypes.string,
  sizeOfPage: PropTypes.number
}
