import styled from 'config/theme'
import RadioComponent from '../../../shared/ui/Radio'
import ButtonComponent from '../../../shared/ui/Button'
import Price from '../../../shared/ui/Price'

const S: any = {}
S.Root = styled.div`
  width: 100%;
  max-width: 800px;
`
S.Block = styled.div`
  margin-bottom: 20px;
`
S.Block100 = S.Block.extend`
  width: 100%;
`
S.Block60 = S.Block.extend`
  width: 60%;
`
S.Block30 = S.Block.extend`
  width: 30%;
`
S.Block60Flex = S.Block.extend`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
S.BlockHalf = styled.div`
  width: calc(50% - 10px);
`
S.Label = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorGray};
`
S.TextSm = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorPrimary};
`
S.AccountPrice = styled(Price).attrs({ colorThemeSecondary: 'colorGray' })`
  margin: 5px 0 3px;
`
S.Radio = styled(RadioComponent)``
S.RadioBlock = styled.div`
  & > ${S.Radio} {
    margin: 10px 10px 0 0;
  }
`
S.Button = styled(ButtonComponent)``
S.Actions = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid ${props => props.theme.colorGray};
  & > ${S.Button} + ${S.Button} {
    margin-left: 10px;
  }
`

export default S
