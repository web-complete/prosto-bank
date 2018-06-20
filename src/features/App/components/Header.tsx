import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss'
import ExitToAppIcon from 'react-icons/lib/md/exit-to-app'
import NotificationIcon from 'react-icons/lib/md/notifications-none'

import { ITheme } from '../../../config/theme'
import { Flex } from '../../../shared/ui/Flex'

export interface Props {
}

type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Header extends React.Component<StyledProps> {
  render () {
    const { classes } = this.props

    return (
      <Flex className={classes.root} justifyEnd>
        <button className={classes.btn}>
          <NotificationIcon className={classes.btnIcon} />
        </button>
        <span className={classes.name}>ООО «ВЕБ КОМПЛИТ»</span>
        <button className={classes.btn}>
          <ExitToAppIcon className={classes.btnIcon} />
        </button>
      </Flex>
    )
  }
}

const styles = (theme: ITheme) => ({
  root: {
    height: '60px',
    padding: '0 20px',
  },
  name: {
    fontWeight: '400',
    margin: '0 20px',
  },
  btn: {
    cursor: 'pointer',
    border: 'none',
  },
  btnIcon: {
    fontSize: '25px',
  },
})

export default injectSheet(styles)(Header)
