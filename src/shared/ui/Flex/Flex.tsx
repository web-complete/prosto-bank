import * as React from 'react'
import injectSheet, { CSSProperties, WithStyles } from 'react-jss'

export interface Props {
  className?: string,
  styles?: CSSProperties,
  dev?: boolean, // red borders
  inline?: boolean,
  vertical?: boolean,
  justifyStart?: boolean,
  justifyEnd?: boolean,
  justifyCenter?: boolean,
  justifySpaceAround?: boolean,
  justifySpaceBetween?: boolean,
  alignTop?: boolean,
  alignBottom?: boolean,
  alignCenter?: boolean,
  alignStretch?: boolean,
  wrap?: boolean,
}

type StyledProps = Props & WithStyles<keyof typeof styles>

export const processStyles = (props: StyledProps, merge: CSSProperties = {}): CSSProperties => {
  const result: CSSProperties = {}
  if (merge) Object.assign(result, merge)
  if (props.dev) result.border = '1px solid red'
  if (props.inline) result.display = 'inline-flex'
  if (props.vertical) result.flexDirection = 'column'
  if (props.justifyStart) result.justifyContent = 'flex-start'
  if (props.justifyEnd) result.justifyContent = 'flex-end'
  if (props.justifyCenter) result.justifyContent = 'center'
  if (props.justifySpaceAround) result.justifyContent = 'space-around'
  if (props.justifySpaceBetween) result.justifyContent = 'space-between'
  if (props.alignTop) result.alignItems = 'flex-start'
  if (props.alignBottom) result.alignItems = 'flex-end'
  if (props.alignCenter) result.alignItems = 'center'
  if (props.alignStretch) result.alignItems = 'stretch'
  if (props.wrap) result.flexWrap = 'wrap'
  return result
}

const Flex: React.StatelessComponent<StyledProps> = props => {
  const { classes, children } = props
  const className = `${classes.root} ${props.className || ''}`.trimRight()
  const styles: CSSProperties = processStyles(props, props.styles || {})

  return (<div className={className} style={styles}>{children}</div>)
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}

export default injectSheet(styles)(Flex)
