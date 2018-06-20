import * as React from 'react'
import injectSheet, { CSSProperties, WithStyles } from 'react-jss'

export interface Props {
  className?: string,
  styles?: CSSProperties,
  dev?: boolean, // red borders
  shrink?: boolean,
  grow?: boolean,
  basis?: string,
  order?: number,
  width?: string,
  height?: string,
  alignTop?: boolean,
  alignBottom?: boolean,
  alignCenter?: boolean,
  alignStretch?: boolean,
}

type StyledProps = Props & WithStyles<keyof typeof styles>

export const processStyles = (props: StyledProps, merge: CSSProperties = {}): CSSProperties => {
  const result: CSSProperties = {}
  if (merge) Object.assign(result, merge)
  if (props.dev) result.border = '1px solid red'
  if (props.shrink) result.flexShrink = 1
  if (props.grow) result.flexGrow = 1
  if (props.order) result.order = props.order
  if (props.basis) result.flexBasis = props.basis
  if (props.width) result.width = props.width
  if (props.height) result.height = props.height
  if (props.alignTop) result.alignSelf = 'flex-start'
  if (props.alignBottom) result.alignSelf = 'flex-end'
  if (props.alignCenter) result.alignSelf = 'center'
  if (props.alignStretch) result.alignSelf = 'stretch'
  return result
}

const Box: React.StatelessComponent<StyledProps> = props => {
  const { classes, children } = props
  const className = `${classes.root} ${props.className || ''}`.trimRight()
  const styles: CSSProperties = processStyles(props, props.styles || {})

  return (<div className={className} style={styles}>{children}</div>)
}

const styles = {
  root: {
    flex: '0 0 auto',
  },
}

export default injectSheet(styles)(Box)
