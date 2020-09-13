import React from 'react'
import { columns, data } from '../elements/Table/ColumnsRows'
import { ReactTable } from '../elements/'
import { useHistory } from 'react-router-dom'
import { InputContainer, Input, ButtonContainer, Button } from '../elements'

export function UserSignUp() {
  const history = useHistory()
  return (
    <div>
      <ReactTable
        columns={columns}
        records={data}
        isRowLink
        selectionKey='uid'
        initialFocusedItemId={200}
      />
    </div>
  )
}
