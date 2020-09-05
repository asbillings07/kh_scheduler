import styled from 'styled-components'
import { absolute } from '../utils'

export const LoadingLine = styled.div`
  transform: translate3d(${({ progress }) => progress}%, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: all 0.5s;
  ${absolute({ yProp: 'bottom', xProp: 'left', y: '0', x: '-100px' })}
  z-index: 10;
  height: 2px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: blue;
`
