import * as React from 'react'
import { Heading1 } from 'components/shared/ui/Heading'
import Tabs from 'components/shared/ui/Tabs/Tabs'
import Tab from 'components/shared/ui/Tabs/Tab'
import PageNewPaymentLegalForm from './newPayment/LegalForm'
import PageNewPaymentIndividualForm from './newPayment/IndividualForm'

interface Props {
}

class PageNewPayment extends React.PureComponent<Props>{
  componentDidMount() {
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  render() {
    return (
      <div>
        <Heading1>Новый платеж</Heading1>
        <Tabs active={'tab1'}>
          <Tab code={'tab1'} title={'Юридическому лицу'}>
            <PageNewPaymentLegalForm/>
          </Tab>
          <Tab code={'tab2'} title={'Физическому лицу'}>
            <PageNewPaymentIndividualForm/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default PageNewPayment
