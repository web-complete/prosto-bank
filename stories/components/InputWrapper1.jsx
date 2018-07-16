import * as React from 'react'
import { action } from '@storybook/addon-actions'
import Input from '../../src/components/shared/ui/Input'

class InputWrapper1 extends React.Component {
  state = { val: '' }
  render = () => <Input label={'Текстовое поле'}
                        value={this.state.val}
                        onInput={v => { this.setState({ val: v }); action('onInput')(v) }}
                        onChange={action('onChange')}
                        onFocus={action('onFocus')}
                        onBlur={action('onBlur')}
  />
}

export default InputWrapper1
