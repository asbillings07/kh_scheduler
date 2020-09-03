import { css } from 'styled-components'
import { grey30, grey50, grey100, grey20, grey70 } from '../utils'

export const borders = (border) =>
  ({
    grey30: css`
      border: 1px solid ${grey30};
    `,
    grey100: css`
      border: 1px solid ${grey100};
    `,
    grey20: css`
      border: 1px solid ${grey20};
    `,
    grey70: css`
      border: 1px solid ${grey70};
    `,
    grey50: css`
      border: 1px solid ${grey50};
    `,
    noBorder: css`
      border: none;
    `,
    smallRadius: css`
      border-radius: 3px;
    `,
    largeRadius: css`
      border-radius: 20px;
    `,
    extraSmallRadius: css`
      border-radius: 2px;
    `
  }[border])
