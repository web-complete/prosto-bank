import * as React from 'react'
import Heading3 from 'components/shared/ui/Heading3'
import styled from 'config/theme'
import Input from 'components/shared/ui/Input'
import Select from 'components/shared/ui/Select'
import Radio from 'components/shared/ui/Radio'
import Date from 'components/shared/ui/Date'
import Price from 'components/shared/ui/Price'

interface Props {
}

class PageNewPaymentLegalForm extends React.PureComponent<Props>{
  render() {
    const org = [{ label: 'ООО "Веб Комплит"', value: '1' }]
    return (
      <StyledRoot>
        <Heading3>Отправитель</Heading3>
        <StyledBlock60>
          <Select label={'Организация'} options={org} value={'1'} />
        </StyledBlock60>
        <StyledBlock30>
          <StyledLabel>Счет списания</StyledLabel>
          <StyledAccountPrice value={667013.57} />
          <StyledTextSm>50701 310 5 2315 0000815</StyledTextSm>
        </StyledBlock30>
        <StyledBlock30>
          <Input label={'КПП'} value={'543301001'} />
        </StyledBlock30>

        <Heading3 style={{ marginTop: '50px' }}>Получатель</Heading3>
        <StyledBlock100>
          <Input label={'Наименование'} value={''} />
        </StyledBlock100>
        <StyledBlock60Flex>
          <Input label={'ИНН'} value={''} width={'calc(50% - 10px)'} />
          <Input label={'КПП'} value={''} width={'calc(50% - 10px)'} />
        </StyledBlock60Flex>
        <StyledBlock60>
          <Input label={'Номер счета'} value={''} />
        </StyledBlock60>
        <StyledBlock30>
          <Input label={'БИК банка'} value={''} />
        </StyledBlock30>

        <Heading3 style={{ marginTop: '50px' }}>Сколько и когда</Heading3>
        <StyledBlock60Flex>
          <Input label={'Сумма'} value={''} width={'calc(50% - 10px)'} />
          <div>
            <StyledLabel>Комиссия</StyledLabel>
            <StyledAccountPrice value={16} />
            <StyledTextSm>Внутри банка — бесплатно</StyledTextSm>
          </div>
        </StyledBlock60Flex>
        <StyledBlock100>
          <Input label={'Назначение'} value={''} />
          <StyledRadioBlock>
            <StyledRadio option={'0'} value={'0'}>НДС не облагается</StyledRadio>
            <StyledRadio option={'+10'} value={'0'}>Плюс 10% НДС</StyledRadio>
            <StyledRadio option={'-10'} value={'0'}>В том числе НДС 10%</StyledRadio>
            <StyledRadio option={'+18'} value={'0'}>Плюс 18% НДС</StyledRadio>
            <StyledRadio option={'-18'} value={'0'}>В том числе НДС 18%</StyledRadio>
            <StyledRadio option={'agent'} value={'0'}>НДС исчисляется налоговым агентом</StyledRadio>
          </StyledRadioBlock>
        </StyledBlock100>
        <StyledBlock60>
          <StyledLabel>Срочность</StyledLabel>
          <StyledRadioBlock>
            <StyledRadio option={'0'} value={'0'}>Стандартно</StyledRadio>
            <StyledRadio option={'1'} value={'0'}>Текущим днем</StyledRadio>
            <StyledRadio option={'2'} value={'0'}>Срочно</StyledRadio>
          </StyledRadioBlock>
        </StyledBlock60>
        <StyledBlock60>
          <Date label={'Отправить не ранее'} value={null}/>
        </StyledBlock60>
        <StyledBlock60>
          <Input label={'УИН/УИП платежа'} value={''} />
        </StyledBlock60>

        <Heading3 style={{ marginTop: '50px' }}>Уведомления об исполнении платежа</Heading3>
        <StyledBlock60Flex>
          111
        </StyledBlock60Flex>

      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div`
  width: 100%;
  max-width: 800px;
`
const StyledBlock = styled.div`
  margin-bottom: 20px;
  //border: 1px solid red;
`
const StyledBlock100 = StyledBlock.extend`
  width: 100%;
`
const StyledBlock60 = StyledBlock.extend`
  width: 60%;
`
const StyledBlock30 = StyledBlock.extend`
  width: 30%;
`
const StyledBlock60Flex = StyledBlock.extend`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorGray};
`
const StyledTextSm = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorPrimary};
`
const StyledAccountPrice = styled(Price).attrs({ colorThemeSecondary: 'colorGray' })`
  margin: 5px 0 3px;
`
const StyledRadio = styled(Radio)``
const StyledRadioBlock = styled.div`
  & > ${StyledRadio} {
    margin: 10px 10px 0 0;
  }
`

export default PageNewPaymentLegalForm
