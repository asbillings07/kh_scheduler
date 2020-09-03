import styled from 'styled-components'
import { borders, elevation, typography, grey100, grey50, above } from '../../../utils'

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 6px 8px;
  ${borders('grey50')}
  ${borders('smallRadius')}
${elevation[1]}
${typography('default')}
color: ${grey100};
  background-color: white;
  resize: none;
  outline: none;

  &:hover {
    ${borders('grey70')}
  }

  &:focus {
    ${borders('grey100')}
  }

  &:placeholder {
    color: ${grey50};
    opacity: 1;
  }

  ${above.med`
  width: 57em;
  height: 30em;
  `}
  ${above.large`
    width: 80em;
    height: 30em;
  `}
`
