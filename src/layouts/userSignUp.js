import React from 'react'
import { useHistory } from 'react-router-dom'
import { InputContainer, Input, ButtonContainer, Button } from '../elements'

export function UserSignUp() {
  const history = useHistory()
  return (
    <div>
      <ButtonContainer>
        <Button name='See Speakers' onClick={() => history.push('/speakers')} />
        <Button name='See Schedule' onClick={() => history.push('/schedules')} />
      </ButtonContainer>
    </div>
  )
}
