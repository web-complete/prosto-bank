import styled from 'config/theme'

const S: any = {}
S.Root = styled.div`
  display: flex;
  & > * + * { margin-left: 20px }
`

export default S
