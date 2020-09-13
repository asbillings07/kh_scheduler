import React from 'react'
import { NavBar } from './navEls/NavElements'
import { NavContainer } from '../../elements/'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { CollapseMenu } from './CollaspeMenu'

export const NavHeader = ({ title, ...props }) => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0()

  const showNavLinks = () => (
    <NavBar.navLinks>
      {isAuthenticated ? (
        <>
          <NavBar.Link>
            <span>Welcome, {user.name}!</span>
          </NavBar.Link>
          <NavBar.Link>
            <Link to='/profile'>Profile</Link>
          </NavBar.Link>
          <NavBar.Link>
            <Link to='' onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </Link>
          </NavBar.Link>
        </>
      ) : (
        <NavBar.Link>
          <Link to='' onClick={() => loginWithRedirect()}>
            Log In
          </Link>
        </NavBar.Link>
      )}
    </NavBar.navLinks>
  )
  return (
    <>
      <NavBar {...props}>
        <NavContainer>
          <span>{title}</span>
          <NavBar.Menu>{showNavLinks()}</NavBar.Menu>
        </NavContainer>
      </NavBar>
    </>
  )
}
