import * as React from 'react'
import { connect } from 'react-redux'
import { IState, IStateAccount } from 'store/state'
import { Heading1 } from 'components/shared/ui/Heading'
import Tabs from 'components/shared/ui/Tabs/Tabs'
import Tab from 'components/shared/ui/Tabs/Tab'
import PageNewPaymentLegalForm from './newPayment/LegalForm'
import PageNewPaymentIndividualForm from './newPayment/IndividualForm'

interface Props {
  accounts: IStateAccount[]
}

class PageNewPayment extends React.PureComponent<Props>{
  componentDidMount() {
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  render() {
    const { accounts } = this.props

    return (
      <div>
        <Heading1>Новый платеж</Heading1>
        <Tabs active={'tab1'}>
          <Tab code={'tab1'} title={'Юридическому лицу'}>
            <PageNewPaymentLegalForm accounts={accounts}/>
          </Tab>
          <Tab code={'tab2'} title={'Физическому лицу'}>
            <PageNewPaymentIndividualForm accounts={accounts}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state: IState): Props => ({
  accounts: state.accounts,
})
export default connect(mapStateToProps)(PageNewPayment)
