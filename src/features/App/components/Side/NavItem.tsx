import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss'
import { ITheme } from '../../../../config/theme'

export interface Props {
  item: NavItem,
}

type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

const NavItem: React.StatelessComponent<StyledProps> = props => {
  const { classes, item } = props

  return (
    <li className={classes.root}>
      <a className={classes.link} href="javascript://">{item.title}</a>
    </li>
  )
}

const styles = (theme: ITheme) => ({
  root: {
    display: 'block',
  },
  link: {
    display: 'block',
    padding: '12px 20px 12px 30px',
    fontSize: '13px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.2s ease',
    '&:hover, &.active': {
      background: `${theme.colorPrimaryHover}`,
    },
  },
})

export default injectSheet(styles)(NavItem)
