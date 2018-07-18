import * as React from 'react'
import S from './Footer.styled'

export interface Props {
}

class Footer extends React.Component<Props> {
  render () {
    return (
      <S.Root>
        &copy; 2000-2018 Просто-Банк. Пример React-интерфейса.
      </S.Root>
    )
  }
}

export default Footer
