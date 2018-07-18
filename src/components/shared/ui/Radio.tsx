import * as React from 'react'
import Button from './Button'

interface Props {
  option: string,
  value: string,
  onChange?: (option: string) => void,
  className?: string,
  styles?: any,
}

class Radio extends React.PureComponent<Props>{
  render() {
    const { option, value, children, onChange, className, styles } = this.props
    const onClick = onChange || function () {}

    return (
      <Button className={className}
              styles={styles}
              active={value === option}
              rounded
              onClick={() => onClick(option)}
      >
        {children}
      </Button>
    )
  }
}

export default Radio
