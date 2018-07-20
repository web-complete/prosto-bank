import * as React from 'react'
import S from './common.styled'

interface Props {
  value: string
}
const Commission: React.StatelessComponent<Props> = ({ value }) => {
  const commission = calculate(value)
  return commission
    ? (
      <div>
        <S.Label>Комиссия</S.Label>
        <S.AccountPrice value={commission} />
        <S.TextSm>Внутри банка — бесплатно</S.TextSm>
      </div>
    )
    : <div/>
}

function calculate(valueString: string) {
  const value = parseFloat(valueString) || 0
  let result = 0
  if (value > 10000) {
    result = Math.round(value * 0.003)
  }
  return result
}

export default Commission
