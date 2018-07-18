import * as React from 'react'
import { ExitToApp as ExitIcon } from 'styled-icons/material/ExitToApp'
import { NotificationsNone as NotificationIcon } from 'styled-icons/material/NotificationsNone'
import S from './Header.styled'

export interface Props {
}

class Header extends React.Component<Props> {
  render () {
    return (
      <S.Root>
        <S.Button>
          <NotificationIcon size={25} />
        </S.Button>
        <S.Name>ООО «ВЕБ КОМПЛИТ»</S.Name>
        <S.Button>
          <ExitIcon size={25} />
        </S.Button>
      </S.Root>
    )
  }
}

export default Header
