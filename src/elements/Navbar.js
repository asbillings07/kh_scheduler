import styled from 'styled-components'
import { animated } from 'react-spring'
import { above, below } from '../utils'

export const Navbar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: gray;
  z-index: 1;
  font-size: 1.4rem;
`

export const NavContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  span {
    color: white;
  }
`

export const NavLinks = styled(animated.ul)`
  display: flex;
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  span {
    color: white;
    ${below.med`
    display: none;
    `}
  }
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    ${below.med`
    display: none;
    `}
  }
`

export const BurgerWrapper = styled.div`
  margin: auto 0;

  ${above.med`
    display: none;
    `}
`
