import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      &:hover {
        background-color: #e5f8ff;
        box-shadow: inset 0 -1px 0 0 #b2bfcc, 0 -1px 0 0 #99d0e2;
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }
      .resizer {
        display: inline-block;
        background: blue;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`
export const TableRow = styled.div`
  :last-child {
    .td {
      border-bottom: 0;
    }
  }

  &:hover {
    background-color: #e5f8ff;
    box-shadow: inset 0 -1px 0 0 #b2bfcc, 0 -1px 0 0 #99d0e2;
  }
  &:focus {
    background-color: blue;
  }

  ${({ focused }) => (focused ? 'background-color: blue;' : '')}
`
