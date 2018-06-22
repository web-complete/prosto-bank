import * as React from 'react'
import styled from 'config/theme'
import Button from 'components/shared/ui/Button'
import IconList from 'react-icons/lib/fa/file-text-o'
import IconXls from 'react-icons/lib/fa/file-excel-o'

interface Props {
  style?: React.CSSProperties
}

const PageMainActions: React.StatelessComponent<Props> = props => (
  <StyledRoot style={props.style}>
    <Button>Новый платеж</Button>
    <Button simple icon={<IconList/>}>Выставить счет</Button>
    <Button simple icon={<IconXls/>}>Выписка посчету</Button>
  </StyledRoot>
)

const StyledRoot = styled.div`
  display: flex;
  & > * + * { margin-left: 20px }
`

export default PageMainActions
