import styled from 'config/theme'

interface BoxProps {
  width?: string,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
  dev?: boolean,
}
const Box = styled.div.attrs<BoxProps>({})`
  display: block;
  ${p => p.width ? `width: ${p.width};` : ''}
  ${p => p.mt ? `margin-top:    ${p.mt * p.theme.spacing}px;` : ''}
  ${p => p.mb ? `margin-bottom: ${p.mb * p.theme.spacing}px;` : ''}
  ${p => p.ml ? `margin-left:   ${p.ml * p.theme.spacing}px;` : ''}
  ${p => p.mr ? `margin-right:  ${p.mr * p.theme.spacing}px;` : ''}
  ${p => p.dev ? 'border: 1px solid red;' : ''}
`

interface FlexBoxProps extends BoxProps {
  justifySpace?: boolean,
  justifyAround?: boolean,
  justifyStart?: boolean,
  justifyEnd?: boolean,
  alignStart?: boolean,
  alignCenter?: boolean,
  alignEnd?: boolean,
}
const FlexBox = Box.extend.attrs<FlexBoxProps>({})`
  display: flex;
  ${p => p.justifySpace ? 'justify-content: space-between;' : ''}
  ${p => p.justifyAround ? 'justify-content: space-around;' : ''}
  ${p => p.justifyStart ? 'justify-content: flex-start;' : ''}
  ${p => p.justifyEnd ? 'justify-content: flex-end;' : ''}
  ${p => p.alignCenter ? 'align-items: center;' : ''}
  ${p => p.alignStart ? 'align-items: flex-start;' : ''}
  ${p => p.alignEnd ? 'align-items: flex-end;' : ''}
`

interface FlexItemProps extends FlexBoxProps {
  flex?: string,
  grow?: boolean,
  shrink?: boolean,
  size1of2?: boolean,
  size1of3?: boolean,
  gap?: number,
  alignStart?: boolean,
  alignCenter?: boolean,
  alignEnd?: boolean,
}
const FlexItem = styled.div.attrs<FlexItemProps>({})`
  ${p => p.flex ? `flex: ${p.flex};` : 'flex: 0 0 auto'}
  ${p => p.grow ? `flex-grow: 1;` : ''}
  ${p => p.shrink ? `flex-shrink: 1;` : ''}
  ${p => p.size1of2 ? `width: calc(50% - ${p.gap ? p.gap * p.theme.spacing : 0}px);` : ''}
  ${p => p.size1of3 ? `width: calc(100% / 3 - ${p.gap ? p.gap * p.theme.spacing : 0}px);` : ''}
  ${p => p.alignCenter ? 'align-self: center;' : ''}
  ${p => p.alignStart ? 'align-self: flex-start;' : ''}
  ${p => p.alignEnd ? 'align-self: flex-end;' : ''}
`

export { Box, FlexBox, FlexItem }
