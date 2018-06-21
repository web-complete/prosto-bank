import * as React from 'react'

import styled from 'config/theme'
import Logo from 'components/shared/ui/Logo'
import SideItem from './side/Item'

export interface Props {
  nav: INavItem[]
}

class Side extends React.Component<Props> {
  render () {
    return (
      <StyledRoot>
        <StyledLogo />
        <ul>
          {this.props.nav.map(item => (<SideItem item={item} key={item.code}/>))}
        </ul>
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div`
  flex: 0 0 auto;
  color: #fff;
  background: ${props => props.theme.colorPrimary};
  width: 280px;
  align-self: stretch;
`

const StyledLogo = styled(Logo)`
  display: block;
  margin: 40px auto;
  width: 150px;
  max-width: 90%;
`

export default Side
