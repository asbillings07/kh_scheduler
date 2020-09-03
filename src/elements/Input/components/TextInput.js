import styled from 'styled-components'
import { starGrey, above } from '../../../utils'

export const TextInput = styled.input`
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 0.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid ${starGrey};
  }
  ${above.med`
  width: 50em;
  `}
  ${above.large`
  width: 70em;
  `}
`
export const TextArea = styled.textarea`
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 0.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid ${starGrey};
  }
`
