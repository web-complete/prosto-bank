import * as React from 'react'
import Button from 'components/shared/ui/Button'
import { File as IconList } from 'styled-icons/feather/File'
import { FileText as IconXls } from 'styled-icons/feather/FileText'
import { navigate } from '@reach/router'
import S from './Actions.styled'

interface Props {
  style?: React.CSSProperties
}

const download = (filename: string, content: string) => {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(content))
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

const downloadExample = () => download('example.csv', 'example')

const PageMainActions: React.StatelessComponent<Props> = props => (
  <S.Root style={props.style}>
    <Button onClick={() => navigate('/new-payment')}>Новый платеж</Button>
    <Button onClick={() => downloadExample()} simple icon={<IconList size={25}/>}>Выставить счет</Button>
    <Button onClick={() => downloadExample()} simple icon={<IconXls size={25}/>}>Выписка по счету</Button>
  </S.Root>
)

export default PageMainActions
