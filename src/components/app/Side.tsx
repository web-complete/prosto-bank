import * as React from 'react'
import SideItem from './side/Item'
import S from './Side.styled'

export interface Props {
  nav: INavItem[]
}

class Side extends React.Component<Props> {
  render () {
    return (
      <S.Root>
        <S.Logo />
        <ul>
          {this.props.nav.map(item => (<SideItem item={item} key={item.code}/>))}
        </ul>
      </S.Root>
    )
  }
}

export default Side
