import React from 'react'
import { Navbar, NavContainer, NavLinks, BurgerWrapper } from '../../elements/'
import { useSpring, config } from 'react-spring'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { BurgerMenu } from './BurgerMenu'
import { CollapseMenu } from './CollaspeMenu'

export const NavBar = ({ handleNavbar, navbarState, title }) => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0()
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  })

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  })

  return (
    <>
      <Navbar style={barAnimation}>
        <NavContainer>
          <span>{title}</span>
          <NavLinks style={linkAnimation}>
            {isAuthenticated ? (
              <>
                <li>
                  <span>Welcome, {user.name}!</span>
                </li>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <Link to='' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to='' onClick={() => loginWithRedirect()}>
                  Log In
                </Link>
              </li>
            )}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </NavContainer>
      </Navbar>
      <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  )
}
