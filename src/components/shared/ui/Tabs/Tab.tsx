import * as React from 'react'
import styled from 'config/theme'

export interface Props {
  code: string,
  title: string,
  active?: boolean,
}

const Tab: React.StatelessComponent<Props> = ({ active, children }) => (
  <StyledRoot className={active ? 'active' : ''}>{children}</StyledRoot>
)

const StyledRoot = styled.div`
  display: none;
  &.active {
    display: block;
  }
`
export default Tab
