import styled from 'config/theme'

const S: any = {}
S.Root = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 12px;
  justify-content: center;
  color: #ffffff;
  background: ${props => props.theme.colorGray};
`

export default S
