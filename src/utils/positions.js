import { css } from 'styled-components'

export const fixed = ({ yProp = 'top', xProp = 'left', x = 0, y = 0 } = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
  width: 100%;
`
export const absolute = ({ yProp = 'top', xProp = 'left', x = 0, y = 0 } = {}) => css`
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
  width: 100%;
`
