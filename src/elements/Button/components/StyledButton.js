import styled from 'styled-components'
import { elevation, teal, red, white } from '../../../utils'
export const StyledButton = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  ${elevation[1]};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    ${elevation[2]};
  }
  &:focus {
    outline: white auto 1px;
  }

  ${({ size }) => {
    switch (size) {
      case 'small': {
        return `font-size: 12px;
        `
      }
      case 'medium': {
        return `font-size: 16px;
                width: 0;
        `
      }
      case 'standard': {
        return `width: 100%;
        `
      }
      default:
        return
    }
  }}

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'cancel': {
        return `background: ${red};
                border-color: ${red};
                color: ${white};
        `
      }
      case 'standard': {
        return `background: darkgrey; 
                border-color: darkgrey;
                color: ${white};
        `
      }
      default: {
        return `background: ${teal}; 
                border-color: ${teal};
                color: ${white};
        `
      }
    }
  }}
`
