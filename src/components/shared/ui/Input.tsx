import * as React from 'react'
import styled from 'config/theme'

interface Props {
  label?: string,
  value: string,
  disabled?: boolean,
  onInput?: (value: string) => void,
  onChange?: (value: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
}
interface State {
  isFocused: boolean,
}

class Input extends React.PureComponent<Props, State>{
  input: HTMLInputElement | null = null
  state: State = {
    isFocused: false,
  }

  onFocus = () => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus()
  }
  onBlur = () => {
    this.setState({ isFocused: false })
    this.props.onChange && this.props.onChange(this.input ? this.input.value : '')
    this.props.onBlur && this.props.onBlur()
  }
  onChange = (e: any) => {
    this.props.onInput && this.props.onInput(e.target.value)
  }
  onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      this.props.onChange && this.props.onChange(this.input ? this.input.value : '')
    }
  }

  render() {
    const { isFocused } = this.state
    const { label, value, disabled } = this.props

    return (
      <StyledRoot className={isFocused ? 'active' : ''}>
        {label && <StyledLabel className={value || isFocused ? 'up' : ''}>{label}</StyledLabel>}
        <StyledInput innerRef={(ref: any) => this.input = ref}
                     onFocus={this.onFocus}
                     onBlur={this.onBlur}
                     onChange={this.onChange}
                     onKeyUp={this.onKeyUp}
                     value={value}
                     disabled={disabled}
        />
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div.attrs<any>({})`
  display: inline-block;
  width: 100%;
  position: relative;
  margin-top: 15px;
  border-bottom: 1px solid ${props => props.theme.colorGray};
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    height: 2px;
    width: 0;
    background: ${props => props.theme.colorPrimary};
    z-index: 1;
    transition: all 0.2s;
  }
  &.active::after {
    width: 100%;
  }
`
const StyledLabel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 14px;
  color: ${props => props.theme.colorGray};
  transition: all 0.2s;
  z-index: 1;
  &.up {
    top: -10px;
    transform: none;
    font-size: 12px;
  }
`
const StyledInput = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  font-size: 14px;
`

export default Input
