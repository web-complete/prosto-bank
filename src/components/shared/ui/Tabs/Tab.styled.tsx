import styled from 'config/theme'

const S: any = {}
S.Root = styled.div`
  display: none;
  &.active {
    display: block;
  }
`

export default S
