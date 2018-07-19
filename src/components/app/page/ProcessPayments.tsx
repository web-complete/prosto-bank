import * as React from 'react'
import { Heading1 } from 'components/shared/ui/Heading'
import Tabs from 'components/shared/ui/Tabs/Tabs'
import Tab from 'components/shared/ui/Tabs/Tab'
import S from './ProcessPayments.styled'

interface Props {
}

class PageProcessPayments extends React.PureComponent<Props>{
  render() {
    return (
      <div>
        <Heading1>Платежи в работе</Heading1>
        <Tabs active={'tab1'}>
          <Tab code={'tab1'} title={'На обработке'}>{this.renderEmpty('На обработке')}</Tab>
          <Tab code={'tab2'} title={'К отправке'}>{this.renderEmpty('К отправке')}</Tab>
          <Tab code={'tab3'} title={'На подпись'}>{this.renderEmpty('На подпись')}</Tab>
          <Tab code={'tab4'} title={'Черновики'}>{this.renderEmpty('Черновики')}</Tab>
        </Tabs>
      </div>
    )
  }

  renderEmpty = (title: string) => (
    <S.Empty>
      <S.Icon/>
      <S.EmptyTitle>{title}</S.EmptyTitle>
      <S.EmptyText>У вас нет платежей данной категории</S.EmptyText>
    </S.Empty>
  )
}

export default PageProcessPayments
