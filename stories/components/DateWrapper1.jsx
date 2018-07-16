import * as React from 'react'
import { action } from '@storybook/addon-actions'
import Date from '../../src/components/shared/ui/Date'

class DateWrapper1 extends React.Component {
  state = { val: null }
  render = () => <Date label={'Выберите дату'}
                       value={this.state.val}
                       width={'500px'}
                       onChange={v => { this.setState({ val: v }); action('onChange')(v) }}
  />
}

export default DateWrapper1
