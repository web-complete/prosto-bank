import * as React from 'react'
import DayPicker from 'react-day-picker'
import * as moment from 'moment'
import S from './Date.styled'

interface Props {
  label?: string,
  value: string,
  format: string,
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
  close = () => this.setState({ isActive: false })
  select = (day: Date) => {
    const value = moment(day).format(this.props.format)
    this.props.onChange && this.props.onChange(value)
    this.close()
  }

  render() {
    const { isActive } = this.state
    const { label, value, format, error, width } = this.props
    const selectedDays = value ? [moment(value, format).toDate()] : []
    const classes = []
    if (value) classes.push('active')
    if (error) classes.push('error')

    return (
      <S.Root className={classes.join(' ')}
                  width={width}
      >
        {value}
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
