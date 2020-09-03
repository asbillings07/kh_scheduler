import styled from 'styled-components'
import { typography, above } from '../../../utils'
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.3em;
  color: white;
  ${typography('medium')}
  ${typography('letterSpacing')}
  ${typography('bold')}
  ${above.med` 
    ${typography('default')}
  `}
`
