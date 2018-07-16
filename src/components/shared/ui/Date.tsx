import * as React from 'react'
import styled from 'config/theme'
import { Calendar } from 'styled-icons/octicons/Calendar'
import DayPicker from 'react-day-picker'
import * as moment from 'moment'
import 'react-day-picker/lib/style.css'

interface Props {
  label?: string,
  value: Date | null,
  disabled?: boolean,
  width?: string,
  onChange?: (value: Date) => void,
}
interface State {
  isActive: boolean,
}
class Select extends React.PureComponent<Props, State>{
  state: State = {
    isActive: false,
  }

  toggle = () => this.setState(state => ({ isActive: !state.isActive }))
  close = () => this.setState({ isActive: false })
  select = (day: Date) => {
    this.props.onChange && this.props.onChange(day)
    this.close()
  }

  render() {
    const { isActive } = this.state
    const { label, value, width } = this.props
    const selectedDays = value ? [value] : []
    const dateString = value ? moment(value).format('DD.MM.YYYY') : ''

    return (
      <StyledRoot className={value ? 'active' : ''}
                  width={width}
      >
        {dateString}
        {label && <StyledLabel className={value ? 'up' : ''}>{label}</StyledLabel>}
        <StyledIcon onClick={this.toggle}/>
        <StyledDateWrapper className={isActive ? 'active' : ''}>
          <DayPicker locale="it"
                     months={months}
                     selectedDays={selectedDays}
                     weekdaysLong={weekDays}
                     weekdaysShort={weekDaysShort}
                     firstDayOfWeek={1}
                     onDayClick={this.select}
          />
        </StyledDateWrapper>
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div.attrs<any>({})`
  cursor: pointer;
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
const StyledIcon = Calendar.extend`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 14px;
  transition: all 0.2s;
`
const StyledDateWrapper = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 245px;
  line-height: 1.2;
  &.active {
    display: block;
  }
`
const months: any = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]
const weekDays: any = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
const weekDaysShort: any = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

export default Select
