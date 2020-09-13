import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  Navbar as StyledNav,
  NavLinks as StyledLinks,
  BurgerWrapper,
  MenuWrapper,
  CollaspedLink
} from '../../../elements/'
import { CollapseWrapper } from '../../../elements/CollaspeMenu'
import { useSpring, config } from 'react-spring'
const navBarContext = createContext()

export function useNavContext() {
  const context = useContext(navBarContext)
  if (!context) {
    throw new Error("You can't use this component outside of context!")
  }
  return context
}

export function NavBar({ title, onOpen, children }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  // const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0()
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  })

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 100,
    config: config.wobbly
  })

  const toggleOpen = () => setIsNavOpen(!isNavOpen)

  useEffect(() => {
    onOpen(isNavOpen)
  }, [isNavOpen, onOpen])

  const contextValue = {
    barAnimation,
    linkAnimation,
    title,
    isNavOpen,
    toggleOpen
  }

  return (
    <navBarContext.Provider value={contextValue}>
      <StyledNav styled={barAnimation}>{children}</StyledNav>
    </navBarContext.Provider>
  )
}

const NavLinks = ({ children }) => {
  const { linkAnimation, isNavOpen } = useNavContext()
  return (
    <>
      {isNavOpen ? (
        <CollaspedLink>{children}</CollaspedLink>
      ) : (
        <StyledLinks style={linkAnimation}>{children}</StyledLinks>
      )}
    </>
  )
}

const Link = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

const Menu = ({ children }) => {
  const { isNavOpen, toggleOpen } = useNavContext()
  const { open } = useSpring({ open: isNavOpen ? 0 : 1 })
  return (
    <>
      {isNavOpen ? (
        <CollapseWrapper
          style={{
            transform: open
              .interpolate({
                range: [0, 0.2, 0.3, 1],
                output: [0, -20, 0, -200]
              })
              .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
          }}
        >
          {children}
        </CollapseWrapper>
      ) : (
        ''
      )}
      <BurgerWrapper>
        <MenuWrapper onClick={toggleOpen}>
          <div className={isNavOpen ? 'open' : ''}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </MenuWrapper>
      </BurgerWrapper>
    </>
  )
}

const CollapseMenu = ({ children }) => {
  const { isNavOpen } = useNavContext()

  // const LinkedNav = () => (
  //   <NavLinks>
  //     {isAuthenticated ? (
  //       <>
  //         <li>
  //           <span>Welcome, {user.name}!</span>
  //         </li>
  //         <li>
  //           <Link to='/profile'>Profile</Link>
  //         </li>
  //         <li>
  //           <Link to='' onClick={() => logout({ returnTo: window.location.origin })}>
  //             Log Out
  //           </Link>
  //         </li>
  //       </>
  //     ) : (
  //       <li>
  //         <Link to='' onClick={() => loginWithRedirect()}>
  //           Log In
  //         </Link>
  //       </li>
  //     )}
  //   </NavLinks>
  // )

  return <></>
}

NavBar.Link = Link
NavBar.navLinks = NavLinks
NavBar.Menu = Menu
