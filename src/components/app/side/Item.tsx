import * as React from 'react'
import { Link } from '@reach/router'
import S from './Item.styled'

export interface Props {
  item: INavItem,
}

const isActive = ({ isPartiallyCurrent , className }: any) => isPartiallyCurrent
  ? { className: 'nav-item active' }
  : { className: 'nav-item' }

const SideItem: React.StatelessComponent<Props> = ({ item }) => (
  <S.Root>
    <Link to={item.path} getProps={isActive}>
      {item.title}
    </Link>
  </S.Root>
)

export default SideItem
