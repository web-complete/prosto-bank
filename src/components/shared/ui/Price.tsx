import * as React from 'react'
import { ITheme } from 'config/theme'
import S from './Price.styled'

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
    <S.Root size={props.size}
                weight={props.weight}
                className={props.className}
                style={props.style}
    >
      <S.Value colorTheme={props.colorThemePrimary}>{valueParts[0]}</S.Value>
      {valueParts[1] && <S.Value colorTheme={props.colorThemeSecondary}>,{valueParts[1]}</S.Value>}
      {!props.hideIcon && (
        <S.Icon size={props.size} colorTheme={props.colorThemeSecondary}/>
      )}
    </S.Root>
  )
}

export default Price
