import * as React from 'react'
import { Router } from '@reach/router'
import styled from 'config/theme'
import nav from 'config/navigation'

interface Props {
}

const Page: React.StatelessComponent<Props> = props => (
  <StyledRoot>
    <Router>
      {nav.map((route, k) => (
        React.createElement(route.component, {
          path: route.path,
          default: route.default,
          key: k,
        })
      ))}
    </Router>
  </StyledRoot>
)

const StyledRoot = styled.div`
  padding: 30px 50px;
`

export default Page
