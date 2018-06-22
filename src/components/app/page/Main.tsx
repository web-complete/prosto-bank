import * as React from 'react'
import PageMainHead from './main/Head'
import PageMainActions from './main/Actions'
import PageMainHistory from './main/History'

interface Props {
}

const PageMain: React.StatelessComponent<Props> = props => (
  <div>
    <PageMainHead/>
    <PageMainActions/>
    <PageMainHistory/>
  </div>
)

export default PageMain
