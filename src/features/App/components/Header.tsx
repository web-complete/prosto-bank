import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss'
import ExitToAppIcon from 'react-icons/lib/md/exit-to-app'

import { ITheme } from '../../../config/theme'
import { Flex } from '../../../shared/ui/Flex'

export interface Props {
}

type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Header extends React.Component<StyledProps> {
  render () {
    const { classes } = this.props

    return (
      <Flex className={classes.root} dev>
        header 123
        <ExitToAppIcon />
      </Flex>
    )
  }
}

const styles = (theme: ITheme) => ({
  root: {
  },
})

export default injectSheet(styles)(Header)
