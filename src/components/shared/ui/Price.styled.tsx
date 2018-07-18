import styled from 'config/theme'
import { RubleSign } from 'styled-icons/fa-solid/RubleSign'

const S: any = {}
S.Root = styled.span.attrs<any>({})`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.size || 14}px;
  font-weight: ${props => props.weight || 300};
`
S.Value = styled.span.attrs<any>({})`
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
`
S.Icon = RubleSign.extend.attrs<any>({})`
  margin-left: 3px;
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
  height: ${props => (props.size || 14) * 0.7}px;
  display: inline-block;
`

export default S
