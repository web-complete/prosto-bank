import * as React from 'react'
import styled from 'config/theme'

interface Props {
  onClick?: Function,
  fontSize?: number,
  disabled?: boolean,
  outlined?: boolean,
  rounded?: boolean,
  dashed?: boolean,
  active?: boolean,
  simple?: boolean,
  icon?: React.ReactElement<any>
}

const Button: React.StatelessComponent<Props> = props => (
  <StyledButton
    onClick={props.onClick}
    outlined={props.outlined}
    disabled={props.disabled}
    rounded={props.rounded}
    dashed={props.dashed}
    active={props.active}
    simple={props.simple}
    hasIcon={!!(props.simple && props.icon)}
  >
    {props.simple && props.icon && (<StyledIcon>{props.icon}</StyledIcon>)}
    <StyledText fontSize={props.fontSize} simple={props.simple}>{props.children}</StyledText>
  </StyledButton>
)

const StyledIcon = styled.span`
  position: relative;
  top: 1px;
  font-size: 22px;
  margin-right: 5px;
`

const StyledText = styled.span`
  ${(props: any) => `
    position: relative;
    display: inline-block;
    font-size: ${props.fontSize || '14'}px;
    ${(() => {
      if (props.simple) {
        return `
            height: 20px;
            &::after {
              position: absolute;
              display: block;
              content: '';
              bottom: 0;
              left: 0;
              right: 0;
              height: 1px;
              border-bottom: 1px dashed ${props.theme.colorGray};
            }
            &:hover::after {
              border-bottom-color: ${props.theme.colorPrimary};
            }
        `
      }
      return ``
    })()}
  `}
`
const StyledButton = styled.button`
  ${(props: any) => `
    position: relative;
    display: inline-block;
    cursor: ${props.disabled ? 'default' : 'pointer'};
    opacity: ${props.disabled ? '0.5' : '1'};
    font-weight: 300;
    padding: 0 20px;
    border-radius: 4px;
    transition: all 0.1s;
    ${(() => {
      if (props.simple) {
        return `
            border: none;
            color: ${props.theme.colorText};
            padding: 5px 0;
          `
      }
      if (props.outlined) {
        return `
            color: ${props.theme.colorText};
            border: 1px solid ${props.theme.colorGray};
            height: 36px;
            line-height: 34px;
            &:hover {
              border-color: ${props.theme.colorPrimary};
            }
        `
      }
      if (props.dashed) {
        return `
            color: ${props.theme.colorText};
            border: 1px dashed ${props.theme.colorGray};
            height: 30px;
            line-height: 28px;
            &:hover {
              border-color: ${props.theme.colorPrimary};
            }
        `
      }
      if (props.rounded) {
        return `
            background: ${props.active ? props.theme.colorPrimaryHover : props.theme.colorGray};
            color: #fff;
            border: none;
            border-radius: 15px;
            height: 30px;
            line-height: 30px;
            &:hover {
              background: ${props.theme.colorPrimary};
            }
          `
      }
      return `
            vertical-align: bottom;
            background: ${props.theme.colorBtnDefault};
            color: #fff;
            border: none;
            height: 36px;
            line-height: 36px;
            &:hover {
              background: ${props.theme.colorBtnHover};
            }
        `
    })()}
  `}
`

export default Button
