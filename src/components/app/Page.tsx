import * as React from 'react'
import { Router } from '@reach/router'
import nav from 'config/navigation'
import S from './Page.styled'

interface Props {
}

const Page: React.StatelessComponent<Props> = props => (
  <S.Root>
    <Router>
      {nav.map((route, k) => (
        React.createElement(route.component, {
          path: route.path,
          default: route.default,
          key: k,
        })
      ))}
    </Router>
  </S.Root>
)

export default Page
