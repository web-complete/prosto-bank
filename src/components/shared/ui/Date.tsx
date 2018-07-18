import * as React from 'react'
import DayPicker from 'react-day-picker'
import * as moment from 'moment'
import S from './Date.styled'

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
      <S.Root className={value ? 'active' : ''}
                  width={width}
      >
        {dateString}
        {label && <S.Label className={value ? 'up' : ''}>{label}</S.Label>}
        <S.Icon onClick={this.toggle}/>
        <S.DateWrapper className={isActive ? 'active' : ''}>
          <DayPicker locale="it"
                     months={months}
                     selectedDays={selectedDays}
                     weekdaysLong={weekDays}
                     weekdaysShort={weekDaysShort}
                     firstDayOfWeek={1}
                     onDayClick={this.select}
          />
        </S.DateWrapper>
      </S.Root>
    )
  }
}

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
