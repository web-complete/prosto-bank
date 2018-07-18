import styled from 'config/theme'
import Logo from '../shared/ui/Logo'

const S: any = {}
S.Root = styled.div`
  flex: 0 0 auto;
  color: #fff;
  background: ${props => props.theme.colorPrimary};
  width: 280px;
  align-self: stretch;
`
S.Logo = styled(Logo)`
  display: block;
  margin: 40px auto;
  width: 150px;
  max-width: 90%;
`

export default S
