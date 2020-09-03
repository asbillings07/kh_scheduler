import styled from 'styled-components'
import { elevation, teal, red, white } from '../utils'
export const Button = styled.button`
  padding: 5px 15px;
  width: 100%;
  ${elevation[1]};
  display: flex;
  align-items: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    ${elevation[2]};
    background: ${teal};
  }
  ${({ type }) => {
    switch (true) {
      case 'cancel': {
        return `background: ${red}
                border-color: ${red}
                color: ${white}
        `
      }
      default: {
        return `background: ${teal} 
                border-color: ${teal}
                color: ${white}
        `
      }
    }
  }}
`
