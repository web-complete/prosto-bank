import * as React from 'react'
import { processStyles as processFlexStyles, Props as FlexProps } from './Flex'
import { processStyles as processBoxStyles, Props as BoxProps } from './Box'
import { CSSProperties, default as injectSheet, WithStyles } from 'react-jss'

type Props = FlexProps & BoxProps
type StyledProps = Props & WithStyles<keyof typeof styles>

const BoxFlex: React.StatelessComponent<StyledProps> = props => {
  const { classes, children } = props
  const className = `${classes.root} ${props.className || ''}`.trimRight()
  const styles: CSSProperties = {
    ...(props.styles || {}),
    ...processBoxStyles(props),
    ...processFlexStyles(props),
  }

  return (<div className={className} style={styles}>{children}</div>)
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
  },
}

export default injectSheet(styles)(BoxFlex)
