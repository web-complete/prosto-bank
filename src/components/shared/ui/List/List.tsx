import * as React from 'react'
import styled from 'config/theme'
import ListTitle from './ListTitle'

interface Props {
  title?: string,
  width?: string,
}

const List: React.StatelessComponent<Props> = props => (
  <StyledRoot width={props.width}>
    {props.title && <ListTitle>{props.title}</ListTitle>}
    {props.children}
  </StyledRoot>
)

const StyledRoot = styled.div`
  width: 100%;
  max-width: ${(props: any) => props.width || '100%'};
`

export default List
