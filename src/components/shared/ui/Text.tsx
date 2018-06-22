import * as React from 'react'
import styled, { ITheme } from 'config/theme'

interface Props {
  size?: number,
  weight?: number,
  color?: string,
  colorTheme?: keyof ITheme,
  block?: boolean,
  paragraph?: boolean,
  className?: string,
  style?: React.CSSProperties,
}

const Text: React.StatelessComponent<Props> = props => props.paragraph
  ? <StyledParagraph size={props.size}
                     weight={props.weight}
                     color={props.color}
                     colorTheme={props.colorTheme}
                     className={props.className}
                     style={props.style}
  >
      {props.children}
    </StyledParagraph>
  : <StyledText size={props.size}
                weight={props.weight}
                color={props.color}
                colorTheme={props.colorTheme}
                block={props.block}
                className={props.className}
                style={props.style}
  >
      {props.children}
    </StyledText>

const StyledText = styled.div<any>`
  display: ${props => props.block ? 'block' : 'inline'};
  color: ${props => (props.colorTheme && props.theme[props.colorTheme]) || props.color || props.theme.colorText};
  font-size: ${props => props.size || 14}px;
  font-weight: ${props => props.weight || 300};
` as any

const StyledParagraph = StyledText.withComponent('p').extend`
  display: block;
`

export default Text
