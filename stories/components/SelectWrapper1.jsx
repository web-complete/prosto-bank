import * as React from 'react'
import { action } from '@storybook/addon-actions'
import Select from '../../src/components/shared/ui/Select'

const options = [
  { value: 'v1', label: 'Option 1' },
  { value: 'v2', label: 'Option 2' },
  { value: 'v3', label: 'Option 3' },
]

class SelectWrapper1 extends React.Component {
  state = { val: 'v1' }
  render = () => <Select label={'Выберите вариант'}
                         value={this.state.val}
                         options={options}
                         onChange={v => { this.setState({ val: v }); action('onChange')(v) }}
  />
}

export default SelectWrapper1
