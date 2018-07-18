import * as React from 'react'
import Price from 'components/shared/ui/Price'
import S from './Head.styled'

interface Props {
}

const PageMainHead: React.StatelessComponent<Props> = props => (
  <S.Root>
    <S.Text style={{ marginBottom: '15px' }}>Всего доступно</S.Text>
    <Price value={667013.84}
           weight={600}
           size={38}
           colorThemePrimary={'colorPrimary'}
           colorThemeSecondary={'colorGray'}
           style={{ marginBottom: '15px' }}
    />
    <S.Text>Рублевый счет **0805</S.Text>
  </S.Root>
)

export default PageMainHead
