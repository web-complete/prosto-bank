import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss'

import { ITheme } from '../../../config/theme'
import { Box } from '../../../shared/ui/Flex'
import Logo from '../../../shared/ui/Logo'
import NavItem from './Side/NavItem'
import nav from '../../../config/navigation' // todo move to container

export interface Props {
}

type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Side extends React.Component<StyledProps> {
  render () {
    const { classes } = this.props

    return (
      <Box className={classes.root} alignStretch>
        <Logo className={classes.logo}/>
        <ul>
          {nav.map(item => (<NavItem item={item} key={item.code}/>))}
        </ul>
      </Box>
    )
  }
}

const styles = (theme: ITheme) => ({
  root: {
    color: '#fff',
    backgroundColor: `${theme.colorPrimary}`,
    width: '280px',
  },
  logo: {
    display: 'block',
    margin: '40px auto',
    width: '170px',
    maxWidth: '90%',
  },
})

export default injectSheet(styles)(Side)
