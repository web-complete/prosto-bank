import * as React from 'react'
import Price from '../../../../shared/ui/Price'
import styled from 'styled-components'
import { ArrowAltCircleDown } from 'styled-icons/fa-regular/ArrowAltCircleDown'
import { ArrowAltCircleUp } from 'styled-icons/fa-regular/ArrowAltCircleUp'

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
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIconIn = styled(ArrowAltCircleDown)`
  height: 40px;
  color: ${props => props.theme.colorGray};
`

const StyledIconOut = styled(ArrowAltCircleUp)`
  height: 40px;
  color: ${props => props.theme.colorGray};
`

const StyledTextCell = styled.div`
  width: 100%;
  flex: 1 1 auto;
`

const StyledPriceCell = styled.div`
  flex: 0 0 auto;
`

export default PageMainHistoryRecord
