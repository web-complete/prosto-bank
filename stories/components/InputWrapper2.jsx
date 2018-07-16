import * as React from 'react'
import { action } from '@storybook/addon-actions'
import Input from '../../src/components/shared/ui/Input'

class InputWrapper2 extends React.Component {
  state = { val: '' }
  render = () => <Input label={'Мобильный телефон'}
                        value={this.state.val}
                        onInput={v => { this.setState({ val: v }); action('onInput')(v) }}
                        onChange={action('onChange')}
                        onAccept={action('onAccept')}
                        onComplete={action('onComplete')}
                        onFocus={action('onFocus')}
                        onBlur={action('onBlur')}
                        mask={'+7 (000) 000-00-00'}
                        lazy={false}
  />
}

export default InputWrapper2
