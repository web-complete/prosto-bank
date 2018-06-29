import * as React from 'react'
import { RubleSign } from 'styled-icons/fa-solid/RubleSign'
import styled, { ITheme } from 'config/theme'

interface Props {
  value: number,
  size?: number,
  weight?: number,
  hideIcon?: boolean,
  colorThemePrimary?: keyof ITheme,
  colorThemeSecondary?: keyof ITheme,
  className?: string,
  style?: React.CSSProperties,
}

const Price: React.StatelessComponent<Props> = props => {
  const valueParts = props.value.toLocaleString().split(',')

  return (
    <StyledRoot size={props.size}
                weight={props.weight}
                className={props.className}
                style={props.style}
    >
      <StyledValue colorTheme={props.colorThemePrimary}>{valueParts[0]}</StyledValue>
      {valueParts[1] && <StyledValue colorTheme={props.colorThemeSecondary}>,{valueParts[1]}</StyledValue>}
      {!props.hideIcon && (
        <StyledIcon size={props.size} colorTheme={props.colorThemeSecondary}/>
      )}
    </StyledRoot>
  )
}

const StyledRoot = styled.span.attrs<any>({})`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.size || 14}px;
  font-weight: ${props => props.weight || 300};
`

const StyledValue = styled.span.attrs<any>({})`
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
`

const StyledIcon = RubleSign.extend.attrs<any>({})`
  margin-left: 3px;
  color: ${props => props.colorTheme ? props.theme[props.colorTheme] : props.theme.colorText}
  height: ${props => (props.size || 14) * 0.7}px;
  display: inline-block;
`

export default Price
