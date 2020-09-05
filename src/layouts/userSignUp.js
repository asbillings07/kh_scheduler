import React, { useEffect } from 'react'
import { useSetState } from '../hooks'
import { InputContainer, Input, ButtonContainer, Button } from '../elements'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export function UserSignUp() {
  const dispatch = useDispatch()
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <div>
      <ButtonContainer>
        <Button name='Log In' onClick={() => loginWithRedirect()} />
        <Button name='Log Out' onClick={() => logout({ returnTo: window.location.origin })} />
      </ButtonContainer>
    </div>
  )
}
