import * as React from 'react'
import styled from 'config/theme'
import { IMaskMixin } from 'react-imask'

interface Props {
  label?: string,
  value: string,
  disabled?: boolean,
  width?: string,
  onInput?: (value: string) => void,
  onChange?: (value: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  // mask props (https://unmanner.github.io/imaskjs/guide.html)
  mask?: any,
  unmask?: boolean,
  radix?: string,
  lazy?: boolean,
  min?: number,
  max?: number,
  definitions?: any,
  groups?: any,
  mapToRadix?: any[],
  normalizeZeros?: boolean,
  padFractionalZeros?: boolean,
  thousandsSeparator?: string,
  signed?: boolean,
  scale?: number,
  pattern?: string,
  prepare?: Function,
  format?: Function,
  parse?: Function,
  dispatch?: Function,
  onAccept?: (value: string) => void,
  onComplete?: (value: string) => void,
}
interface State {
  lastChange: string,
  isFocused: boolean,
}

class Input extends React.PureComponent<Props, State>{
  input: HTMLInputElement | null = null
  state: State = {
    lastChange: this.props.value,
    isFocused: false,
  }

  onFocus = () => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus()
  }
  onBlur = () => {
    this.setState({ isFocused: false })
    this.props.onBlur && this.props.onBlur()
    this.onChanged()
  }
  onChange = (e: any) => {
    this.props.onInput && this.props.onInput(e.target.value)
  }
  onChanged = () => {
    if (this.input && this.input.value !== this.state.lastChange) {
      this.setState({ lastChange: this.input.value })
      this.props.onChange && this.props.onChange(this.input.value)
    }
  }
  onKeyUp = (e: any) => { if (e.keyCode === 13) this.onChanged() }

  render() {
    const { isFocused } = this.state
    const { label, value, disabled, width } = this.props
    const props = { ...this.props }
    delete props.onChange
    delete props.onInput
    const labelUp = value || isFocused || (props.mask && props.lazy === false)

    return (
      <StyledRoot className={isFocused ? 'active' : ''} width={width}>
        {label && <StyledLabel className={labelUp ? 'up' : ''}>{label}</StyledLabel>}
        <MaskedStyledInput
          { ...props }
          innerRef={(ref: any) => this.input = ref}
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
  width: ${props => props.width || '100%'};
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
  line-height: 1;
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
const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }: any) => {
  return <StyledInput {...props} innerRef={inputRef} />
})

export default Input
