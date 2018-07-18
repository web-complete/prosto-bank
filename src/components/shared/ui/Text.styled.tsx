import styled from 'config/theme'

const S: any = {}
S.Text = styled.div.attrs<any>({})`
  display: ${props => props.block ? 'block' : 'inline'};
  color: ${props => (props.colorTheme && props.theme[props.colorTheme]) || props.color || props.theme.colorText};
  font-size: ${props => props.size || 14}px;
  font-weight: ${props => props.weight || 300};
`
S.Paragraph = S.Text.withComponent('p').extend`
  display: block;
`

export default S
