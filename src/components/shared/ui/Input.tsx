import * as React from 'react'
import { IMaskMixin } from 'react-imask'
import S from './Input.styled'

interface Props {
  label?: string,
  value: string,
  error?: string,
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
  isFocused: boolean,
}

class Input extends React.PureComponent<Props, State>{
  input: HTMLInputElement | null
  state: State = {
    isFocused: false,
  }

  focus = () => {
    if (this.input) this.input.focus()
  }
  onFocus = () => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus()
  }
  onBlur = (e: any) => {
    this.setState({ isFocused: false })
    this.props.onBlur && this.props.onBlur()
    this.onChanged(e.target.value)
  }
  onChange = (e: any) => {
    this.props.onInput && this.props.onInput(e.target.value)
  }
  onChanged = (value: string) => {
    this.props.onChange && this.props.onChange(value)
  }
  onKeyUp = (e: any) => { if (e.keyCode === 13) this.onChanged(e.target.value) }

  render() {
    const { isFocused } = this.state
    const { label, value, error, disabled, width } = this.props
    const props = { ...this.props }
    delete props.onChange
    delete props.onInput
    const labelUp = value || isFocused || (props.mask && props.lazy === false)
    const classes = []
    if (isFocused) classes.push('active')
    if (error) classes.push('error')

    return (
      <S.Root className={classes.join(' ')} width={width}>
        {label && <S.Label className={labelUp ? 'up' : ''} onClick={this.focus}>{label}</S.Label>}
        <MaskedStyledInput
          { ...props }
          inpRef={(ref: HTMLInputElement) => this.input = ref}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          value={value}
          disabled={disabled}
        />
        {error ? <S.Error>{error}</S.Error> : ''}
      </S.Root>
    )
  }
}

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }: any) => {
  return <S.Input {...props} innerRef={(ref: any) => { inputRef(ref); props.inpRef(ref) }} />
})

export default Input
