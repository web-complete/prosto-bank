import * as React from 'react'
import { connect } from 'react-redux'
import { IStateAccount, IState } from 'store/state'
import PageMainHead from './main/Head'
import PageMainActions from './main/Actions'
import PageMainHistory from './main/History'

interface Props {
  account: IStateAccount
}

const PageMain: React.StatelessComponent<Props> = ({ account }) => (
  <div>
    <PageMainHead number={account.number} value={account.value}/>
    <PageMainActions style={{ marginTop: '50px' }}/>
    <PageMainHistory items={account.items} style={{ marginTop: '70px' }}/>
  </div>
)

const mapStateToProps = (state: IState): Props => ({
  account: state.accounts[0],
})
export default connect(mapStateToProps)(PageMain)
