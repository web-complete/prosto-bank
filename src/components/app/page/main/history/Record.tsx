import * as React from 'react'
import Price from '../../../../shared/ui/Price'
import styled from 'styled-components'
import IconIn from 'react-icons/lib/fa/arrow-circle-o-down'
import IconOut from 'react-icons/lib/fa/arrow-circle-o-up'

interface Props {
  type: 'in' | 'out',
  text: string,
  value: number,
}

const PageMainHistoryRecord: React.StatelessComponent<Props> = ({ type, text, value }) => (
  <StyledRoot>
    <StyledIconCell>
      {type === 'in' ? <StyledIconIn/> : <StyledIconOut/>}
    </StyledIconCell>
    <StyledTextCell>
      {text}
    </StyledTextCell>
    <StyledPriceCell>
      <Price value={value} />
    </StyledPriceCell>
  </StyledRoot>
)

const StyledRoot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const StyledIconCell = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${props => props.theme.colorGray};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIconIn = styled(IconIn)`
  font-size: 40px;
`

const StyledIconOut = styled(IconOut)`
  font-size: 40px;
`

const StyledTextCell = styled.div`
  width: 100%;
  flex: 1 1 auto;
`

const StyledPriceCell = styled.div`
  flex: 0 0 auto;
`

export default PageMainHistoryRecord
