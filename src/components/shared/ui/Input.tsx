import * as React from 'react'
import styled from 'config/theme'

interface Props {
  label?: string,
  value?: string,
}
interface State {
  isFocused: boolean,
}

class Input extends React.PureComponent<Props, State>{
  state: State = {
    isFocused: false,
  }

  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })

  render() {
    const { isFocused } = this.state
    const { label, value } = this.props

    return (
      <StyledRoot className={isFocused ? 'active' : ''}>
        {label && <StyledLabel className={value || isFocused ? 'up' : ''}>{label}</StyledLabel>}
        <StyledInput onFocus={this.onFocus} onBlur={this.onBlur} />
      </StyledRoot>
    )
  }
}

const StyledLabel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 14px;
  color: ${props => props.theme.colorGray};
  transition: all 0.2s;
  z-index: 1;
`
const StyledRoot = styled.div.attrs<any>({})`
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
  &.active ${StyledLabel} {
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
