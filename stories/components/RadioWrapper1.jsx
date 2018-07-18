import * as React from 'react'
import { action } from '@storybook/addon-actions'
import Radio from '../../src/components/shared/ui/Radio'

class RadioWrapper1 extends React.Component {
  state = { val: 'value1' }
  render = () => (
    <div>
      <Radio option={'value1'}
             value={this.state.val}
             onChange={v => { this.setState({ val: v }); action('onChange')(v) }}
      >Option 1</Radio>
      <Radio option={'value2'}
             value={this.state.val}
             onChange={v => { this.setState({ val: v }); action('onChange')(v) }}
      >Option 2</Radio>
      <Radio option={'value3'}
             value={this.state.val}
             onChange={v => { this.setState({ val: v }); action('onChange')(v) }}
      >Option 3</Radio>
    </div>
  )
}

export default RadioWrapper1
