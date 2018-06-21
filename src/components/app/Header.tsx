import * as React from 'react'
import ExitToAppIcon from 'react-icons/lib/md/exit-to-app'
import NotificationIcon from 'react-icons/lib/md/notifications-none'

import styled from 'config/theme'

export interface Props {
}

class Header extends React.Component<Props> {
  render () {
    return (
      <StyledRoot>
        <StyledButton>
          <StyledNotificationIcon />
        </StyledButton>
        <StyledName>ООО «ВЕБ КОМПЛИТ»</StyledName>
        <StyledButton>
          <StyledExitIcon />
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

const StyledNotificationIcon = styled(NotificationIcon)`
  font-size: 25px;
`

const StyledExitIcon = styled(ExitToAppIcon)`
  font-size: 25px;
`

export default Header
