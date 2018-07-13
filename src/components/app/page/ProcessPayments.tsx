import * as React from 'react'
import styled from 'config/theme'
import Heading1 from 'components/shared/ui/Heading1'
import Tabs from 'components/shared/ui/Tabs/Tabs'
import Tab from 'components/shared/ui/Tabs/Tab'
import { Clock as ClockIcon } from 'styled-icons/fa-regular/Clock'

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
    <StyledEmpty>
      <StyledIcon/>
      <StyledEmptyTitle>{title}</StyledEmptyTitle>
      <StyledEmptyText>У вас нет платежей данной категории</StyledEmptyText>
    </StyledEmpty>
  )
}

const StyledEmpty = styled.div.attrs<any>({})`
  margin-top: 60px;
  text-align: center;
`
const StyledIcon = ClockIcon.extend`
  height: 60px;
  margin-bottom: 20px;
  color: ${props => props.theme.colorGray};
`
const StyledEmptyTitle = styled.div.attrs<any>({})`
  font-size: 34px;
  margin-bottom: 10px;
  font-weight: 500;
`
const StyledEmptyText = styled.div.attrs<any>({})`
`

export default PageProcessPayments
