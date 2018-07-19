import styled from 'config/theme'
import RadioComponent from '../../../shared/ui/Radio'
import ButtonComponent from '../../../shared/ui/Button'
import Price from '../../../shared/ui/Price'

const S: any = {}
S.Root = styled.div`
  width: 100%;
  max-width: 800px;
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
  border-top: 1px solid ${props => props.theme.colorGrayLight};
  & > ${S.Button} + ${S.Button} {
    margin-left: 10px;
  }
`

export default S
