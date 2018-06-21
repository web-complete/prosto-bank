import React from 'react'

import styles from '../src/assets/css/global.css'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import WithThemeProvider from './decorators/WithThemeProvider'
import backgrounds from '@storybook/addon-backgrounds'
import Logo from '../src/components/shared/ui/Logo'
import Heading1 from '../src/components/shared/ui/Heading1'
import Heading2 from '../src/components/shared/ui/Heading2'
import Heading3 from '../src/components/shared/ui/Heading3'
import Text from '../src/components/shared/ui/Text'
import { Tabs, Tab } from '../src/components/shared/ui/Tabs'

storiesOf('Logo', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .addDecorator(backgrounds([{ name: "main", value: "#252A30", default: true }]))
  .add('full', withNotes(``)(() => (<Logo/>)))
  .add('short', withNotes(``)(() => (<Logo short/>)))
  .add('color', withNotes(``)(() => (<Logo color={'#ffd833'}/>)))

storiesOf('Typography', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .add('Heading1', withNotes(``)(() => (<Heading1>Heading 1</Heading1>)))
  .add('Heading2', withNotes(``)(() => (<Heading2>Heading 2</Heading2>)))
  .add('Heading3', withNotes(``)(() => (<Heading3>Heading 3</Heading3>)))
  .add('Text', withNotes(``)(() => (
    <div>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
    </div>
  )))

storiesOf('Other', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .add('Tabs', withNotes(``)(() => (
    <Tabs active={'tab3'} onSelect={action('onSelect')}>
      <Tab code={'tab1'} title={'Таб 1'}>Контент 1</Tab>
      <Tab code={'tab2'} title={'Таб 2'}>Контент 2</Tab>
      <Tab code={'tab3'} title={'Таб 3'}>Контент 3</Tab>
    </Tabs>
  )))
