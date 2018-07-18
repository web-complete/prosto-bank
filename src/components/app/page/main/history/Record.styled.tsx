import styled from 'config/theme'
import { ArrowAltCircleUp } from 'styled-icons/fa-regular/ArrowAltCircleUp'
import { ArrowAltCircleDown } from 'styled-icons/fa-regular/ArrowAltCircleDown'

const S: any = {}
S.Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
S.IconCell = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
S.IconIn = styled(ArrowAltCircleDown)`
  height: 40px;
  color: ${props => props.theme.colorGray};
`
S.IconOut = styled(ArrowAltCircleUp)`
  height: 40px;
  color: ${props => props.theme.colorGray};
`
S.TextCell = styled.div`
  width: 100%;
  flex: 1 1 auto;
`
S.PriceCell = styled.div`
  flex: 0 0 auto;
`

export default S
