import * as React from 'react'
import { ExitToApp as ExitIcon } from 'styled-icons/material/ExitToApp'
import { NotificationsNone as NotificationIcon } from 'styled-icons/material/NotificationsNone'

import styled from 'config/theme'

export interface Props {
}

class Header extends React.Component<Props> {
  render () {
    return (
      <StyledRoot>
        <StyledButton>
          <NotificationIcon size={25} />
        </StyledButton>
        <StyledName>ООО «ВЕБ КОМПЛИТ»</StyledName>
        <StyledButton>
          <ExitIcon size={25} />
        </StyledButton>
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  justify-content: flex-end;
`

const StyledName = styled.span`
  font-weight: 400;
  margin: 0 20px;
`

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
`

export default Header
