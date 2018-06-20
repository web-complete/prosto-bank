import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss'
import logo from '../../assets/img/logo.svg'

export interface Props {
  className?: string,
}

type StyledProps = Props & WithStyles<keyof typeof styles>

const Logo: React.StatelessComponent<StyledProps> = props => {
  const { classes } = props
  const className = `${classes.root} ${props.className || ''}`.trimRight()

  return (<img className={className} src={logo} alt="logo" title="" />)
}

const styles = {
  root: {
    maxWidth: '100%',
  },
}

export default injectSheet(styles)(Logo)
