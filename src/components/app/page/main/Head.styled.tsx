import styled from 'config/theme'

const S: any = {}
S.Root = styled.div``
S.Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.colorGray};
`

export default S
