import styled from 'config/theme'
import { Clock as ClockIcon } from 'styled-icons/fa-regular/Clock'

const S: any = {}
S.Empty = styled.div.attrs<any>({})`
  margin-top: 60px;
  text-align: center;
`
S.Icon = ClockIcon.extend`
  height: 60px;
  margin-bottom: 20px;
  color: ${props => props.theme.colorGray};
`
S.EmptyTitle = styled.div.attrs<any>({})`
  font-size: 34px;
  margin-bottom: 10px;
  font-weight: 500;
`
S.EmptyText = styled.div.attrs<any>({})`
`

export default S
