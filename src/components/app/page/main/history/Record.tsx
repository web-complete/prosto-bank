import * as React from 'react'
import Price from 'components/shared/ui/Price'
import S from './Record.styled'

interface Props {
  type: 'in' | 'out',
  text: string,
  value: number,
}

const PageMainHistoryRecord: React.StatelessComponent<Props> = ({ type, text, value }) => (
  <S.Root>
    <S.IconCell>
      {type === 'in' ? <S.IconIn/> : <S.IconOut/>}
    </S.IconCell>
    <S.TextCell>
      {text}
    </S.TextCell>
    <S.PriceCell>
      <Price value={value} />
    </S.PriceCell>
  </S.Root>
)

export default PageMainHistoryRecord
