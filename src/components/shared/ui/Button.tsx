import * as React from 'react'
import S from './Button.styled'

interface Props {
  onClick?: Function,
  fontSize?: number,
  disabled?: boolean,
  outlined?: boolean,
  rounded?: boolean,
  dashed?: boolean,
  active?: boolean,
  simple?: boolean,
  icon?: React.ReactElement<any>,
  className?: string,
  styles?: any,
}

const Button: React.StatelessComponent<Props> = props => (
  <S.Button
    onClick={props.onClick}
    outlined={props.outlined}
    disabled={props.disabled}
    rounded={props.rounded}
    dashed={props.dashed}
    active={props.active}
    simple={props.simple}
    hasIcon={!!(props.simple && props.icon)}
    className={props.className}
    styles={props.styles}
  >
    {props.simple && props.icon && (<S.Icon>{props.icon}</S.Icon>)}
    <S.Text fontSize={props.fontSize} simple={props.simple}>{props.children}</S.Text>
  </S.Button>
)

export default Button
