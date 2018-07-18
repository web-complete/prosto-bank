import * as React from 'react'
import { ITheme } from 'config/theme'
import S from './Text.styled'

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
  ? <S.Paragraph size={props.size}
                     weight={props.weight}
                     color={props.color}
                     colorTheme={props.colorTheme}
                     className={props.className}
                     style={props.style}
  >
      {props.children}
    </S.Paragraph>
  : <S.Text size={props.size}
                weight={props.weight}
                color={props.color}
                colorTheme={props.colorTheme}
                block={props.block}
                className={props.className}
                style={props.style}
  >
      {props.children}
    </S.Text>

export default Text
