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
import Button from '../src/components/shared/ui/Button'
import Price from '../src/components/shared/ui/Price'
import { Tabs, Tab } from '../src/components/shared/ui/Tabs'
import { List, ListItem } from '../src/components/shared/ui/List'
import NotificationIcon from 'react-icons/lib/md/notifications-none'

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
  .add('Text', withNotes(``)(() => (<Text>Simple text</Text>)))
  .add('Text size', withNotes(``)(() => (<Text size={16}>Simple text with size 16</Text>)))
  .add('Text weight', withNotes(``)(() => (<Text weight={600}>Simple text with weight 600</Text>)))
  .add('Text color', withNotes(``)(() => (<Text color={'blue'}>Simple text with blue color</Text>)))
  .add('Text color theme', withNotes(``)(() => (<Text colorTheme={'colorAlert'}>Simple text with theme color</Text>)))
  .add('Text inline', withNotes(``)(() => (
    <div>
      <Text>Text inline 1</Text>{' '}
      <Text>Text inline 2</Text>
    </div>
  )))
  .add('Text block', withNotes(``)(() => (
    <div>
      <Text block>Text div 1</Text>
      <Text block>Text div 2</Text>
    </div>
  )))
  .add('Text paragraph', withNotes(``)(() => (
    <div>
      <Text paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
    </div>
  )))
  .add('Icon', withNotes(`
  import NotificationIcon from 'react-icons/lib/md/notifications-none'
  @see: http://react-icons.github.io/react-icons/
  `)(() => (<NotificationIcon/>)))
  .add('price simple', withNotes(``)(() => (<Price value={667013.84} />)))
  .add('price without icon', withNotes(``)(() => (<Price value={667013.84} hideIcon />)))
  .add('price big colored', withNotes(``)(() => (<Price value={667013.84} size={38} weight={600} colorThemePrimary={'colorPrimary'} colorThemeSecondary={'colorGray'} />)))

storiesOf('Buttons', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .add('default', withNotes(``)(() => (<Button>Кнопка default</Button>)))
  .add('disabled', withNotes(``)(() => (<Button disabled>Кнопка disabled</Button>)))
  .add('outlined', withNotes(``)(() => (<Button outlined>Кнопка outlined</Button>)))
  .add('outlined disabled', withNotes(``)(() => (<Button outlined disabled>Кнопка outlined disabled</Button>)))
  .add('rounded', withNotes(``)(() => (<Button rounded>Кнопка rounded</Button>)))
  .add('rounded active', withNotes(``)(() => (<Button rounded active>Кнопка rounded</Button>)))
  .add('dashed', withNotes(``)(() => (<Button dashed>Кнопка dashed</Button>)))
  .add('small text', withNotes(``)(() => (<Button fontSize={12}>Кнопка small text</Button>)))
  .add('simple', withNotes(``)(() => (<Button simple>Кнопка simple</Button>)))
  .add('icon and link', withNotes(``)(() => (<Button simple icon={<NotificationIcon/>}>Кнопка simple + icon</Button>)))
  .add('buttons align', withNotes(``)(() => (
    <div>
      <Button>Кнопка default</Button> &nbsp;
      <Button fontSize={12}>Кнопка small text</Button> &nbsp;
      <Button outlined>Кнопка outlined</Button> &nbsp;
      <Button rounded>Кнопка rounded</Button> &nbsp;
      <Button dashed>Кнопка dashed</Button> &nbsp;
      <Button simple>Кнопка simple</Button> &nbsp;
      <Button simple icon={<NotificationIcon/>}>Кнопка simple + icon</Button>
    </div>
  )))

storiesOf('Lists', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .add('simple', withNotes(``)(() => (
    <List title={'Title'} width={'500px'}>
      <ListItem>item 1</ListItem>
      <ListItem>item 2</ListItem>
      <ListItem>item 3</ListItem>
    </List>
  )))
  .add('table', withNotes(``)(() => (<div>Todo</div>)))

storiesOf('Other', module)
  .addDecorator(story => (<WithThemeProvider>{story()}</WithThemeProvider>))
  .add('Tabs', withNotes(``)(() => (
    <Tabs active={'tab3'} onSelect={action('onSelect')}>
      <Tab code={'tab1'} title={'Таб 1'}>Контент 1</Tab>
      <Tab code={'tab2'} title={'Таб 2'}>Контент 2</Tab>
      <Tab code={'tab3'} title={'Таб 3'}>Контент 3</Tab>
    </Tabs>
  )))
