import * as React from 'react'
import { Link } from '@reach/router'
import styled from 'config/theme'

export interface Props {
  item: INavItem,
}

const isActive = ({ isPartiallyCurrent , className }: any) => isPartiallyCurrent
  ? { className: 'nav-item active' }
  : { className: 'nav-item' }

const SideItem: React.StatelessComponent<Props> = ({ item }) => (
  <StyledRoot>
    <Link to={item.path} getProps={isActive}>
      {item.title}
    </Link>
  </StyledRoot>
)

const StyledRoot = styled.li`
  display: block;
  & > .nav-item {
    display: block;
    text-decoration: none;
    padding: 12px 20px 12px 30px;
    font-size: 13px;
    color: #fff;
    transition: all 0.2s ease;
  }
  & > .nav-item:hover, .nav-item.active {
    background: ${props => props.theme.colorPrimaryHover};
  }
`

export default SideItem
