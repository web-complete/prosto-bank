import * as React from 'react'
import styled from 'config/theme'
import { ChevronDown } from 'styled-icons/feather/ChevronDown'

export type TOption = {
  value: string,
  label: string,
}
interface Props {
  label?: string,
  options: TOption[],
  value: string,
  disabled?: boolean,
  width?: string,
  onChange?: (value: string) => void,
}
interface State {
  isActive: boolean,
}
class Select extends React.PureComponent<Props, State>{
  state: State = {
    isActive: false,
  }

  toggle = () => this.setState(state => ({ isActive: !state.isActive }))
  select = (option: TOption) => this.props.onChange && this.props.onChange(option.value)

  render() {
    const { isActive } = this.state
    const { label, value, options, width } = this.props
    const selectedOption = options.find(o => o.value === value)
    const selectedLabel = selectedOption ? selectedOption.label : ''

    return (
      <StyledRoot className={selectedLabel ? 'active' : ''}
                  width={width}
                  onClick={this.toggle}
      >
        {selectedLabel}
        {label && <StyledLabel className={selectedLabel ? 'up' : ''}>{label}</StyledLabel>}
        <StyledIcon className={isActive ? 'active' : ''}/>
        <StyledDropdown className={isActive ? 'active' : ''}>
          {this.renderOptions()}
        </StyledDropdown>
      </StyledRoot>
    )
  }

  renderOptions() {
    const { options, value } = this.props
    return options.map(option => (
      <StyledOption className={option.value === value ? 'selected' : ''}
                    onClick={() => this.select(option)}
                    key={option.value}
      >
        {option.label}
      </StyledOption>
    ))
  }
}

const StyledRoot = styled.div.attrs<any>({})`
  display: inline-block;
  width: ${props => props.width || '100%'};
  position: relative;
  margin-top: 15px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
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
const StyledIcon = ChevronDown.extend`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 14px;
  transition: all 0.2s;
  &.active {
    transform: translateY(-50%) rotate(180deg);
  }
`
const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 0;
  max-height: 0;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  border: 1px solid ${props => props.theme.colorGray};
  transition: all 0.2s;
  &.active {
    height: auto;
    max-height: 400px;
    opacity: 1;
    visibility: visible;
 }
`
const StyledOption = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: all 0.1s;
  &:hover, &.selected {
    background: ${props => props.theme.colorGrayLight};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colorGrayLight};
  }
`

export default Select
