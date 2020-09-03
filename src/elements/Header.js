import styled from 'styled-components'
import { white, fixed, elevation } from '../utils'

export const Header = styled.header`
  background: gray;
  font-size: 2em;
  color: ${white};
  padding: 10px 5%;
  text-align: center;
  ${elevation[1]}
  ${fixed()}
`
