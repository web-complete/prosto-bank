import * as React from 'react'
import RubIcon from 'react-icons/lib/fa/rouble'
import styled, { ITheme } from 'config/theme'

interface Props {
  value: number,
  size?: number,
  weight?: number,
  hideIcon?: boolean,
  colorThemePrimary?: keyof ITheme,
  colorThemeSecondary?: keyof ITheme,
}

const Price: React.StatelessComponent<Props> = props => {
  const valueParts = props.value.toLocaleString().split(',')

  return (
    <StyledRoot size={props.size} weight={props.weight}>
      <StyledValue colorTheme={props.colorThemePrimary}>{valueParts[0]}</StyledValue>
      {valueParts[1] && <StyledValue colorTheme={props.colorThemeSecondary}>,{valueParts[1]}</StyledValue>}
      {!props.hideIcon && <StyledIcon size={props.size} colorTheme={props.colorThemeSecondary}><RubIcon/></StyledIcon>}
    </StyledRoot>
  )
}
const StyledRoot = styled.span<any>`
  vertical-align: bottom;
  line-height: 1;
  font-size: ${props => props.size || 14}px;
  font-weight: ${props => props.weight || 300};
`

const StyledValue = styled.span<any>`
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
`

const StyledIcon = styled.span<any>`
  margin-left: 3px;
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
  height: ${props => (props.size || 14) * 0.8}px;
  line-height: 1;
  display: inline-block;
  vertical-align: top;
  & svg {
    max-height: 100%
  }
`

export default Price
