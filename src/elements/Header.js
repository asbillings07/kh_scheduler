import styled from 'styled-components'
import { white, fixed, elevation, above } from '../utils'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: gray;
  font-size: 2em;
  color: ${white};
  padding: 10px 5%;
  text-align: center;
  ${elevation[1]}
  ${fixed()}
  span {
    font-size: 18px;
    margin-right: 2em;
  }
`
