import React from 'react'
import { Header, HeaderContainer, Button } from '../elements/'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Heading = ({ title }) => {
  const history = useHistory()
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0()
  console.log(user)
  return (
    <Header>
      {title}
      <HeaderContainer>
        {isAuthenticated ? (
          <div>
            <span>Welcome, {user.name}!</span>
            <Button name='Profile' size='small' onClick={() => history.push('/profile')} />
            <Button
              name='Logout'
              size='small'
              onClick={() => logout({ returnTo: window.location.origin })}
            />
          </div>
        ) : (
          <Button name='Login' size='small' onClick={() => loginWithRedirect()} />
        )}
      </HeaderContainer>
    </Header>
  )
}
