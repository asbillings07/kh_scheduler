import PropTypes from 'prop-types'
import React from 'react'
import ReactDom from 'react-dom'
import { Inner, Body, Close, Container, Image, Header } from './Styles'

export function Card({ isOpen, toggleOpen, children, ...restProps }) {
  return isOpen
    ? ReactDom.createPortal(
        <Container>
          <Inner>
            <Close onClick={() => toggleOpen(!isOpen)} />
            {children}
          </Inner>
        </Container>,
        document.body
      )
    : null
}

Card.propTypes = {
  children: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

Card.Body = ({ children, ...restProps }) => <Body {...restProps}>{children}</Body>
Card.Header = ({ children, ...restProps }) => <Header {...restProps}>{children}</Header>
Card.Image = ({ src, alt, children }) => (
  <Image src={src} alt={alt}>
    {children}
  </Image>
)
