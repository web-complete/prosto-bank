import * as React from 'react'
import Button from 'components/shared/ui/Button'
import NotificationIcon from 'react-icons/lib/md/notifications-none'

interface Props {
}

const PageMainActions: React.StatelessComponent<Props> = props => (
  <div>
    <Button>Новый платеж</Button> {' '}
    <Button simple>Кнопка simple</Button> &nbsp;
    <Button simple icon={<NotificationIcon/>}>Выставить счет</Button>
    <Button simple icon={<NotificationIcon/>}>Выписка посчету</Button>
  </div>
)

export default PageMainActions
