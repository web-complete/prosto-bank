import * as React from 'react'
import I from 'immutant'
import { If } from 'classes/Helper'
import { Box, FlexBox, FlexItem } from 'components/shared/ui/Layout'
import { Heading3 } from 'components/shared/ui/Heading'
import Input from 'components/shared/ui/Input'
import Select from 'components/shared/ui/Select'
import Date from 'components/shared/ui/Date'
import LegalFormModel from './LegalFormModel'
import S from './common.styled'

const form = new LegalFormModel()
const formData = {
  senderId: '' as string,
  senderKpp: '' as string,
  receiverName: '' as string,
  receiverInn: '' as string,
  receiverKpp: '' as string,
  receiverAccount: '' as string,
  receiverBik: '' as string,
  value: '' as string,
  description: '' as string,
  nds: '0' as string,
  urgency: '0' as string,
  notEarlier: '' as string,
  uin: '' as string,
  notifyPhone: '' as string,
  notifyEmail: '' as string,
}

interface Props {
}
interface State {
  formData: typeof formData,
  formErrors: {[key: string]: string},
}

class PageNewPaymentLegalForm extends React.PureComponent<Props, State>{
  state: State = {
    formData: { ...formData },
    formErrors: {},
  }

  field = (field: keyof typeof formData, method = 'onChange') => ({
    value: this.state.formData[field],
    error: this.state.formErrors[field] || '',
    [method]: (value: any) => this.setState(state => {
      return I(state)
        .delete(['formErrors', field])
        .set(value, ['formData', field])
        .result
    }),
  })

  reset = () => this.setState({ formData: { ...formData } })

  submit = () => {
    form.setData(this.state.formData)
    if (form.validate()) {
      alert('Validation OK')
    }
    this.setState({ formErrors: form.getFirstErrors() })
  }

  render() {
    const senderOpt = [{ label: 'ООО "Веб Комплит"', value: '1' }]
    const isUrgent = this.state.formData.urgency !== '0'

    return (
      <S.Root>
        <Heading3>Отправитель</Heading3>

        <Box width={'60%'} mb={3}>
          <Select
            label={'Организация'}
            options={senderOpt}
            {...this.field('senderId')}
          />
        </Box>

        <Box width={'30%'} mb={3}>
          <S.Label>Счет списания</S.Label>
          <S.AccountPrice value={667013.57} />
          <S.TextSm>50701 310 5 2315 0000815</S.TextSm>
        </Box>

        <Box width={'30%'} mb={3}>
          <Input
            label={'КПП'}
            mask={'#### ## ###'}
            definitions={{ '#': Number }}
            {...this.field('senderKpp')}
          />
        </Box>

        <Heading3 mt={7}>Получатель</Heading3>

        <Box mb={3}>
          <Input
            label={'Наименование'}
            {...this.field('receiverName')}
          />
        </Box>

        <FlexBox width={'60%'} mb={3} justifySpace>
          <FlexItem size1of2 gap={1}>
            <Input
              label={'ИНН'}
              mask={'#### ##### #'}
              definitions={{ '#': Number }}
              {...this.field('receiverInn')}
            />
          </FlexItem>
          <FlexItem size1of2 gap={1}>
            <Input
              label={'КПП'}
              mask={'#### ## ###'}
              definitions={{ '#': Number }}
              {...this.field('receiverKpp')}
            />
          </FlexItem>
        </FlexBox>

        <Box width={'30%'} mb={3}>
          <Input
            label={'Номер счета'}
            mask={'### ## ### # #### #######'}
            definitions={{ '#': Number }}
            {...this.field('receiverAccount')}
          />
        </Box>

        <Box width={'30%'} mb={3}>
          <Input
            label={'БИК банка'}
            mask={'## ## ## ###'}
            definitions={{ '#': Number }}
            {...this.field('receiverBik')}
          />
        </Box>

        <Heading3 mt={7}>Сколько и когда</Heading3>

        <FlexBox width={'60%'} mb={3} justifySpace>
          <Input
            width={'calc(50% - 10px)'}
            label={'Сумма'}
            {...this.field('value')}
          />
          <div>
            <S.Label>Комиссия</S.Label>
            <S.AccountPrice value={16} />
            <S.TextSm>Внутри банка — бесплатно</S.TextSm>
          </div>
        </FlexBox>

        <Box mb={3}>
          <Input label={'Назначение'} {...this.field('description')} />
          <S.RadioBlock>
            <S.Radio option={'0'} {...this.field('nds')}>НДС не облагается</S.Radio>
            <S.Radio option={'+10'} {...this.field('nds')}>Плюс 10% НДС</S.Radio>
            <S.Radio option={'-10'} {...this.field('nds')}>В том числе НДС 10%</S.Radio>
            <S.Radio option={'+18'} {...this.field('nds')}>Плюс 18% НДС</S.Radio>
            <S.Radio option={'-18'} {...this.field('nds')}>В том числе НДС 18%</S.Radio>
            <S.Radio option={'agent'} {...this.field('nds')}>НДС исчисляется налоговым агентом</S.Radio>
          </S.RadioBlock>
        </Box>

        <Box width={'60%'} mb={3}>
          <S.Label>Срочность</S.Label>
          <S.RadioBlock>
            <S.Radio option={'0'} {...this.field('urgency')}>Стандартно</S.Radio>
            <S.Radio option={'1'} {...this.field('urgency')}>Текущим днем</S.Radio>
            <S.Radio option={'2'} {...this.field('urgency')}>Срочно</S.Radio>
          </S.RadioBlock>
        </Box>

        {If(!isUrgent, (
          <Box width={'60%'} mb={3}>
            <Date
              label={'Отправить не ранее'}
              format={'DD.MM.YYYY'}
              {...this.field('notEarlier')}
            />
          </Box>
        ))}

        <Box width={'60%'} mb={3}>
          <Input
            label={'УИН/УИП платежа'}
            mask={'##### ##### ##### #####'}
            definitions={{ '#': Number }}
            {...this.field('uin')}
          />
        </Box>

        <Heading3 mt={7}>Уведомления об исполнении платежа</Heading3>

        <FlexBox width={'60%'} mb={3} justifySpace>
          <FlexItem size1of2 gap={1}>
            <Input
              label={'Телефон'}
              mask={'+7 (000) 000-00-00'}
              {...this.field('notifyPhone')}
            />
          </FlexItem>
          <FlexItem size1of2 gap={1}>
            <Input
              label={'E-Mail'}
              {...this.field('notifyEmail')}
            />
          </FlexItem>
        </FlexBox>

        <S.Actions>
          <S.Button onClick={this.submit}>Подписать и отправить</S.Button>
          <S.Button outlined onClick={this.reset}>Сбросить</S.Button>
        </S.Actions>
      </S.Root>
    )
  }
}

export default PageNewPaymentLegalForm
