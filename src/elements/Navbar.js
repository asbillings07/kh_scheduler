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

export const NavList = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  span {
    color: white;
    margin-right: 5px;
  }

  ${({ listOpen }) => {
    if (listOpen) {
      return `display: flex;
  flex-direction: column;
   padding: 2rem 1rem 2rem 2rem;
  span {
    color: white;
    margin-right: 5px;
  }
  & li {
    transition: all 300ms linear 0s;
  }`
    }
  }}
`
export const CollaspedList = styled(animated.ul)``
export const NavLink = styled.a`
  a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    margin-right: 10px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
  ${({ collaspedLink }) => {
    if (collaspedLink) {
      return `a { font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0 1.5rem;
  transition: all 300ms linear 0s;
  ${below.med`
    display: none;
    `}}`
    }
  }}
`
export const MainWrapper = styled.div`
  ${below.med`
    display: none;
    `}
`
export const BurgerWrapper = styled.div`
  margin: auto 0;

  ${above.med`
    display: none;
    `}
`

export const MenuWrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;
  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`
