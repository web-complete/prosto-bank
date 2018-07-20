import * as React from 'react'
import Price from 'components/shared/ui/Price'
import S from './Head.styled'

interface Props {
  number: string,
  value: number,
}

const formatNumber = (number: string) => '**' + number.substr(-4)
const PageMainHead: React.StatelessComponent<Props> = ({ number, value }) => (
  <S.Root>
    <S.Text style={{ marginBottom: '15px' }}>Всего доступно</S.Text>
    <Price value={value}
           weight={600}
           size={38}
           colorThemePrimary={'colorPrimary'}
           colorThemeSecondary={'colorGray'}
           style={{ marginBottom: '15px' }}
    />
    <S.Text>Рублевый счет {formatNumber(number)}</S.Text>
  </S.Root>
)

export default PageMainHead
