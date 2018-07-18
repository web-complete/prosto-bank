import * as React from 'react'
import Heading3 from 'components/shared/ui/Heading3'
import Input from 'components/shared/ui/Input'
import Select from 'components/shared/ui/Select'
import Date from 'components/shared/ui/Date'
import S from './LegalForm.styled'

interface Props {
}

class PageNewPaymentLegalForm extends React.PureComponent<Props>{
  render() {
    const org = [{ label: 'ООО "Веб Комплит"', value: '1' }]
    return (
      <S.Root>
        <Heading3>Отправитель</Heading3>
        <S.Block60>
          <Select label={'Организация'} options={org} value={'1'} />
        </S.Block60>
        <S.Block30>
          <S.Label>Счет списания</S.Label>
          <S.AccountPrice value={667013.57} />
          <S.TextSm>50701 310 5 2315 0000815</S.TextSm>
        </S.Block30>
        <S.Block30>
          <Input label={'КПП'} value={'543301001'} />
        </S.Block30>

        <Heading3 style={{ marginTop: '50px' }}>Получатель</Heading3>
        <S.Block100>
          <Input label={'Наименование'} value={''} />
        </S.Block100>
        <S.Block60Flex>
          <S.BlockHalf>
            <Input label={'ИНН'} value={''} />
          </S.BlockHalf>
          <S.BlockHalf>
            <Input label={'КПП'} value={''} />
          </S.BlockHalf>
        </S.Block60Flex>
        <S.Block60>
          <Input label={'Номер счета'} value={''} />
        </S.Block60>
        <S.Block30>
          <Input label={'БИК банка'} value={''} />
        </S.Block30>

        <Heading3 style={{ marginTop: '50px' }}>Сколько и когда</Heading3>
        <S.Block60Flex>
          <Input label={'Сумма'} value={''} width={'calc(50% - 10px)'} />
          <div>
            <S.Label>Комиссия</S.Label>
            <S.AccountPrice value={16} />
            <S.TextSm>Внутри банка — бесплатно</S.TextSm>
          </div>
        </S.Block60Flex>
        <S.Block100>
          <Input label={'Назначение'} value={''} />
          <S.RadioBlock>
            <S.Radio option={'0'} value={'0'}>НДС не облагается</S.Radio>
            <S.Radio option={'+10'} value={'0'}>Плюс 10% НДС</S.Radio>
            <S.Radio option={'-10'} value={'0'}>В том числе НДС 10%</S.Radio>
            <S.Radio option={'+18'} value={'0'}>Плюс 18% НДС</S.Radio>
            <S.Radio option={'-18'} value={'0'}>В том числе НДС 18%</S.Radio>
            <S.Radio option={'agent'} value={'0'}>НДС исчисляется налоговым агентом</S.Radio>
          </S.RadioBlock>
        </S.Block100>
        <S.Block60>
          <S.Label>Срочность</S.Label>
          <S.RadioBlock>
            <S.Radio option={'0'} value={'0'}>Стандартно</S.Radio>
            <S.Radio option={'1'} value={'0'}>Текущим днем</S.Radio>
            <S.Radio option={'2'} value={'0'}>Срочно</S.Radio>
          </S.RadioBlock>
        </S.Block60>
        <S.Block60>
          <Date label={'Отправить не ранее'} value={null}/>
        </S.Block60>
        <S.Block60>
          <Input label={'УИН/УИП платежа'} value={''} />
        </S.Block60>

        <Heading3 style={{ marginTop: '50px' }}>Уведомления об исполнении платежа</Heading3>
        <S.Block60Flex>
          <S.BlockHalf>
            <Input label={'Телефон'} value={''} />
          </S.BlockHalf>
          <S.BlockHalf>
            <Input label={'E-Mail'} value={''} />
          </S.BlockHalf>
        </S.Block60Flex>

        <S.Actions>
          <S.Button>Подписать и отправить</S.Button>
          <S.Button outlined>Сбросить</S.Button>
        </S.Actions>
      </S.Root>
    )
  }
}

export default PageNewPaymentLegalForm
