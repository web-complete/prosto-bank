import * as React from 'react'
import S from './Select.styled'

export type TOption = {
  value: string,
  label: string,
}
interface Props {
  label?: string,
  options: TOption[],
  value: string,
  error?: string,
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
    const { label, value, error, options, width } = this.props
    const selectedOption = options.find(o => o.value === value)
    const selectedLabel = selectedOption ? selectedOption.label : ''
    const classes = []
    if (selectedLabel) classes.push('active')
    if (error) classes.push('error')

    return (
      <S.Root className={classes.join(' ')}
                  width={width}
                  onClick={this.toggle}
      >
        {selectedLabel}
        {label && <S.Label className={selectedLabel ? 'up' : ''}>{label}</S.Label>}
        <S.Icon className={isActive ? 'active' : ''}/>
        <S.Dropdown className={isActive ? 'active' : ''}>
          {this.renderOptions()}
        </S.Dropdown>
        {error ? <S.Error>{error}</S.Error> : ''}
      </S.Root>
    )
  }

  renderOptions() {
    const { options, value } = this.props
    return options.map(option => (
      <S.Option className={option.value === value ? 'selected' : ''}
                    onClick={() => this.select(option)}
                    key={option.value}
      >
        {option.label}
      </S.Option>
    ))
  }
}

export default Select
