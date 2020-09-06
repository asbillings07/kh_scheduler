import styled from 'styled-components'
import { below } from '../utils/'
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: inline-flex;
  margin-top: 25px;
`
export const InputContainer = styled(MainContainer)``

export const HeaderContainer = styled.div`
  display: flex;
  ${below.medSmall`
    flex-direction: column;
    justify-content: center;
  `}
`
