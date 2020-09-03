import styled from 'styled-components'
import { InputLabel } from '../../Input/components'
import { typography } from '../../../utils'
export const TextAreaLabel = styled(InputLabel)`
  flex-grow: 1;
  ${typography('defaultLineHeight')}
  ${typography('bold')}
`
